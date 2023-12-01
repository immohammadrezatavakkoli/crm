import AddCustomerForm from "../../components/templates/AddCustomerForm";

const AddCustomer = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#212121] font-Inter font-light">
      <div className="h-1/2 w-4/12 flex flex-col justify-start items-center gap-10">
        <h2 className="text-[1.25rem] text-white uppercase">
          Add New Customer
        </h2>
        <AddCustomerForm />
      </div>
    </div>
  );
}

export default AddCustomer;

