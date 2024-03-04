"use server";
import Joi from "joi";
import api from "api"


export async function fubForms(prevState, leadInput, listing) {
    console.log(listing)
const sdk = require("api")("@boss/v1.0#20f6oa1blt8x309t");
  if (!process.env.FUBAPIKEY) {
    console.error("FUBAPIKEY is not set.");
    return { message: "Server configuration error." };
  }
  const schema = Joi.object({
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    phone: Joi.string().pattern(/^\d{3}-\d{3}-\d{4}$/).required(),
    email: Joi.string().email().required(),
    source: Joi.string().required(),
    note: Joi.string().allow("", null),
  });

  const { error } = schema.validate(leadInput);
  if (error) {
    console.error("Validation Error:", error.details);
    return { message: "Your data is incorrect. Make sure your email is correct and the phone number is in xxx-xxx-xxxx format." };
  }
  sdk.auth(process.env.FUBAPIKEY);

  try {
    const response = await sdk.eventsPost({
      person: {
        contacted: false,
        firstName: leadInput.get("firstname"),
        lastName: leadInput.get("lastname"),
        emails: [{ value: leadInput.get("email") }],
        phones: [{ value: leadInput.get("phone") }],
      },
      source: "reThought.Studio",
      system: "reThoughWebApp",
      type: "Property Inquiry",
      message: "Sample note"
    //  property: {
    //    street: listing.address.deliveryLine,
    //    city: listing.address.city,
    //    state: listing.address.state,
    //    code: listing.address.zip,
    //    mlsNumber: listing.id,
    //    price: listing.listPrice,
    //    type: listing.listingType,
    //  },
    });

    console.log("SDK Response:", response.data);
    return { message: `Successfully submitted property inquiry for ${listing.address.deliveryLine}.` };
  } catch (err) {
    console.error("SDK Error:", err);
    return { message: "Failed to create property inquiry." };
  }
}
