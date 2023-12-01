import CustomerCard from "../module/CustomerCard";
import { BsPersonFill } from "react-icons/bs";

const CustomersList = ({ customers }) => {
  return (
    <div className="h-auto w-10/12 flex flex-row justify-center items-center flex-wrap gap-1">
      <div className="h-auto w-full flex flex-row justify-center items-center gap-2 rounded-[4px] px-4 py-3 bg-[#2B2C30] font-Inter font-light uppercase">
        <p className="h-full w-5/12 text-[1rem] text-white cursor-default">
          Full Name
        </p>
        <p className="h-full w-4/12 text-[1rem] text-white cursor-default">
          Phone
        </p>
        <div className="h-full w-3/12 flex flex-row justify-end items-center pr-[3.5rem] text-[1.5rem] text-white cursor-default">
        <BsPersonFill />
        <span className="relative -top-2 -left-[0.05rem] text-[0.80rem]">
          {customers.length}
        </span>
        </div>
      </div>
      {customers.map((customer) => (
        <CustomerCard key={customer._id} {...customer} />
      ))}
    </div>
  );
};

export default CustomersList;
