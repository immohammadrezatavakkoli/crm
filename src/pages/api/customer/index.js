import connectDB from "../../../utils/connectDB";
import Customer from "../../../../models/Customer";
import Joi from 'joi';

const registrationSchema = Joi.object({
  fullName: Joi.string().min(6).required(),
  phone: Joi.string().min(10).required(),
  email: Joi.string().email().required(),
});

// const validateRegistration = ({ fullName, phone, email }) => {
//   const errors = {};
//   if (fullName.length < 6) {
//     errors.fullName = "Please enter your FullName correctly.";
//   }
//   if (phone.length < 10) {
//     errors.phone = "Please enter your Phone correctly.";
//   }
//   if (email.length < 8) {
//     errors.email = "Please enter your email correctly.";
//   }
//   return errors;
// };

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ status: "failed", message: "Error in connecting to DB" });
  }

  switch (req.method) {
    case "POST":
      const { error } = registrationSchema.validate(req.body);

      if (error) {
        const validationErrors = error.details.map(detail => {
          return {
            // field: detail.context.key,
            message: detail.message,
          };
        });
      
        return res.status(422).json({ errors: validationErrors });
      }


      // const validationErrors = validateRegistration(req.body);

      // if (Object.keys(validationErrors).length > 0) {
      //   return res.status(422).json({ errors: validationErrors });
      // }

      try {
        const { fullName, phone, email } = req.body;

        const newCustomer = await Customer.create({
          fullName,
          phone,
          email,
        });

        await newCustomer.save();

        return res.status(201).json({ message: "success" });
      } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyValue) {
          return res.status(409).json({ message: "Duplicate key error", keyValue: error.keyValue });
        } else {
          console.error(error);
          return res.status(500).json({ error: "Error connecting to DB" });
        }
      }
      break;
      
    case "GET":
      try {
        const customer = await Customer.find();
        return res.status(200).json({ status: "success", data: customer });
      } catch (error) {
        return res.status(500).json({ error: "Error retrieving data from the database" });
      }
      break;

    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
}
