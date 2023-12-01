import { useState } from "react";
import EditCustomerForm from "../templates/EditCustomerForm";
import { format, parseISO } from "date-fns";

const CustomerDetailsPage = ({ data }) => {
  
  const [editMode, setEditMode] = useState(false);

  const formattedCreateAt = format(
    parseISO(data.createAt),
    "dd/MM/yyyy HH:mm:ss"
  );
  const formattedUpdateAt = format(
    parseISO(data.updatedAt),
    "dd/MM/yyyy HH:mm:ss"
  );

  return (
    <>
      {!editMode ? (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-[#212121] font-Inter">
          <div className="h-1/2 w-4/12 flex flex-col justify-start items-center gap-10">
            <h2 className="text-[1.25rem] text-white font-light uppercase">
            Customer Details
            </h2>
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <p className="w-full flex flex-row justify-start items-center rounded-[4px] p-2 text-white text-[0.90rem] bg-[#2B2C30] font-extralight">
                {data.fullName}
              </p>
              <p className="w-full flex flex-row justify-start items-center rounded-[4px] p-2 text-white text-[0.90rem] bg-[#2B2C30] font-extralight">
                {data.phone}
              </p>
              <p className="w-full flex flex-row justify-start items-center rounded-[4px] p-2 text-white text-[0.90rem] bg-[#2B2C30] font-extralight">
                {data.email}
              </p>
              <p className="w-full flex flex-row justify-start items-center gap-2 rounded-[4px] p-2 text-white text-[0.90rem] bg-[#2B2C30] font-extralight">
              <span className="text-[#47c730] text-[0.80rem]">Create at</span>
              {formattedCreateAt}
              </p>
              <p className="w-full flex flex-row justify-start items-center gap-2 rounded-[4px] p-2 text-white text-[0.90rem] bg-[#2B2C30] font-extralight">
              <span className="text-[#47c730] text-[0.80rem]">Upadte at</span>
              {formattedUpdateAt}
              </p>
              <button
              onClick={() => setEditMode(true)}
              className="w-full flex flex-row justify-center items-center rounded-[4px] p-2 text-white text-[0.90rem] bg-[#328923] uppercase relative top-5 font-light"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-[#212121] font-Inter font-light">
          <div className="h-1/2 w-4/12 flex flex-col justify-start items-center gap-10">
          <h2 className="text-[1.25rem] text-white uppercase">
          Edit Customer
          </h2>
          <EditCustomerForm data={data} setEditMode={setEditMode} />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerDetailsPage;
