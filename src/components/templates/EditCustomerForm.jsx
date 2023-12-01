import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import FieldForm from "../module/FieldForm";
import editCustomer from "../../api/editCustomer";

const EditCustomerForm = ({ data, setEditMode }) => {
  const router = useRouter();
  return (
  <Formik
  initialValues={{
  fullName: data.fullName,
  phone: data.phone,
  email: data.email,
  }}
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
    const hasChanges =
    values.fullName !== data.fullName ||
    values.phone !== data.phone ||
    values.email !== data.email;

    if (hasChanges) {
      editCustomer(data, values, router, setEditMode);
    } else {
      alert("No changes made.");
    }

    setEditMode(false);
    setSubmitting(false);
    }}>
      <Form className="w-full flex flex-col justify-start items-start gap-1">
        <FieldForm
          type="text"
          name="fullName"
          minLength="6"
          maxLength=""
          placeholder=""
        />
        <FieldForm
          type="text"
          name="phone"
          minLength="10"
          maxLength="10"
          placeholder=""
        />
        <FieldForm
          type="email"
          name="email"
          minLength="8"
          maxLength=""
          placeholder=""
        />
        <div className="w-full flex flex-row justify-start items-center gap-1 pt-10 font-Inter font-light">
          <button
            type="button"
            className="w-1/2 flex flex-row justify-center items-center rounded-[4px] p-2 text-white text-[0.90rem] bg-[#c73b3d] uppercase"
            onClick={() => setEditMode(false)}
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

export default EditCustomerForm;
