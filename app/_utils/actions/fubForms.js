"use server";
import Joi from "joi";
import api from "api";

export async function fubForms(prevState, formData) {

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

  const persons = {
    firstName: formData.get("first-name"),
    lastName: formData.get("last-name"),
    emails: formData.get("email"),
    phones: formData.get("phone-number")
  };

  console.log("Person",person)

  const { error } = schema.validate(persons);
  if (error) {
    console.error("Validation Error:", error.details);
    return {
      message:
        "Your data is incorrect. Make sure your email is correct and the phone number is in xxx-xxx-xxxx format.",
    };
  }
    const payload = {
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
      //  property: {
      //    street: listing.address.deliveryLine,
      //    city: listing.address.city,
      //    state: listing.address.state,
      //    code: listing.address.zip,
      //    mlsNumber: listing.id,
      //    price: listing.listPrice,
      //    type: listing.listingType,
      //  },
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
        // Check if the request was not successful
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    
      const data = await res.json(); // Assuming you need to do something with the response data
    
      return {
        message: `Successfully submitted property inquiry.`,
      };
    } catch (err) {
      console.error("Error:", err);
      return { message: "Failed to create property inquiry." };
    }
    
}
