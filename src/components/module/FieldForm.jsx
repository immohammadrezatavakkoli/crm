import { Field, ErrorMessage } from "formik";

const FieldForm = ({type, name, minLength, maxLength, placeholder}) => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-1 font-Inter font-extralight uppercase">
      <Field
      className="w-full flex flex-row justify-start items-center rounded-[4px] p-2 text-white text-[0.90rem] bg-[#2B2C30] outline-none"
      type={type}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
      />
      <ErrorMessage name={name} component="div" className="w-full h-auto text-[0.80rem] text-[#c73b3d]" />
    </div>
  );
}

export default FieldForm;