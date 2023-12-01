import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
    minlength: 6
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(phone) {
        return phone.length === 10;
      },
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 8
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;
