import { useRouter } from "next/router";
import deleteCustomer from "../../api/deleteCustomer";
import { BsPersonFillX } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";

const CustomerCard = ({ fullName, phone, _id }) => {

  const router = useRouter();

  return (
    <div className="h-auto w-full flex flex-row justify-center items-center gap-2 rounded-[4px] px-4 py-3 bg-[#2B2C30] font-Inter font-extralight">
      <p className="h-full w-5/12 text-[0.90rem] text-white cursor-default">
        {fullName}
      </p>
      <p className="h-full w-4/12 text-[0.90rem] text-white cursor-default">
        {phone}
      </p>
      <div className="h-full w-3/12 flex flex-row justify-center items-center gap-1">
        <button
        onClick={() => router.push(`/customers/${_id}`)}
        className="h-auto w-1/2 flex flex-row justify-center items-center text-[1.5rem] text-white">
          <BsPersonFillGear />
        </button>
        <button
        onClick={() => deleteCustomer(_id, router)}
        className="h-auto w-1/2 flex flex-row justify-center items-center text-[1.5rem] text-white">
          <BsPersonFillX />
        </button>
      </div>
    </div>
  );
}

export default CustomerCard;