"use server";
import Joi from "joi";
import fetch from "node-fetch"; // Make sure to import 'fetch' if you're using it in a server environment

interface Person {
  firstName: string;
  lastName: string;
  emails: string;
  phones: string;
}

interface Payload {
  person: {
    contacted: false;
    firstName: string;
    lastName: string;
    emails: Array<{ value: string }>;
    phones: Array<{ value: string }>;
  };
  source: string;
  system: string;
  type: string;
  message: string;
  property: {
    street: string;
    city: string;
    state: string;
    code: string;
    mlsNumber: string;
    price: string;
    type: string;
  };
}

interface Listing {
  address: {
    deliveryLine: string;
    city: string;
    state: string;
    zip: string;
  };
  id: string;
  listPrice: number;
  listingType: string;
}

export async function fubForms(prevState: any, formData: FormData): Promise<{ message: string }> {
  if (!process.env.FUBAPIKEY) {
    console.error("FUBAPIKEY is not set.");
    return { message: "Server configuration error." };
  }

  const schema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    phones: Joi.string()
      .max(10)
      .required(),
    emails: Joi.string().email().required(),
    source: Joi.string(),
    note: Joi.string().allow("", null),
  });

  const persons: Person = {
    firstName: formData.get("first-name") as string,
    lastName: formData.get("last-name") as string,
    emails: formData.get("email") as string,
    phones: formData.get("phone-number") as string,
  };

  const { error } = schema.validate(persons);
  if (error) {
    console.error("Validation Error:", error.details);
    return {
      message:
        "Your data is incorrect. Make sure your email is correct and the phone number is in xxx-xxx-xxxx format.",
    };
  }

  const payload: Payload = {
    person: {
      contacted: false,
      firstName: persons.firstName,
      lastName: persons.lastName,
      emails: [{ value: persons.emails }],
      phones: [{ value: persons.phones }],
    },
    source: "reThought.Studio",
    system: "reThoughWebApp",
    type: "Property Inquiry",
    message: "Sample note",
    property: {
      street: formData.get("street") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      code: formData.get("code") as string,
      mlsNumber: formData.get("mlsNumber") as string,
      price: formData.get("price") as string,
      type: formData.get("type") as string,
    },
  };

  try {
    const res = await fetch(`https://api.followupboss.com/v1/events`, {
      method: "POST",
      headers: {
        'Authorization': `Basic ${Buffer.from(`${process.env.FUBAPIKEY}:`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    console.log("Done")
    return { 
      message: `Successfully submitted property inquiry.`,
    };
  } catch (err) {
    console.error("Error:", err);
    return { message: "Failed to create property inquiry." };
  }
}
