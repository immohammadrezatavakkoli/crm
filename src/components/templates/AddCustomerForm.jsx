import { Formik, Form } from "formik";
import FieldForm from "../module/FieldForm";
import addCustomer from "../../api/addCustomer";
import { useRouter } from "next/router";

const AddCustomerForm = () => {
  const router = useRouter();
  return (
  <Formik
  initialValues={{ fullName: "", phone: "", email: "" }}
  validate={(values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Please enter your full name";
  } else if (!/^[A-Za-z\s]+$/.test(values.fullName)) {
    errors.fullName = "Name should only contain Latin letters a - z - A - Z";
  }

  if (!values.phone) {
    errors.phone = "Please enter your phone number";
  } else if (!/^[0-9]+$/.test(values.phone)) {
    errors.phone = "Phone number should only contain numbers 0 - 9";
  }

  if (!values.email) {
    errors.email = "Please enter your email";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "The email address is invalid";
  }
  return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
    addCustomer(values, router);
    setSubmitting(false);
  }}
  >
    <Form className="w-full flex flex-col justify-start items-start gap-1">
      <FieldForm
        type="text"
        name="fullName"
        minLength="6"
        maxLength=""
        placeholder="John Doe"
      />
      <FieldForm
        type="text"
        name="phone"
        minLength="10"
        maxLength="10"
        placeholder="Phone"
      />
      <FieldForm
        type="email"
        name="email"
        minLength="8"
        maxLength=""
        placeholder="Email"
      />
      <div className="w-full flex flex-row justify-start items-center gap-1 font-Inter font-light pt-10">
        <button
        type="button"
        onClick={() => router.push("/")}
        className="w-1/2 flex flex-row justify-center items-center rounded-[4px] p-2 text-white text-[0.90rem] bg-[#c73b3d] uppercase"
        >
        Cancel
        </button>
        <button
        type="submit"
        className="w-1/2 flex flex-row justify-center items-center rounded-[4px] p-2 text-white text-[0.90rem] bg-[#328923] uppercase"
        >
        Save
        </button>
      </div>
    </Form>
  </Formik>
  );
};

export default AddCustomerForm;
