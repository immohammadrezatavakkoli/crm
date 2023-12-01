import connectDB from "../../utils/connectDB";
import Customer from "../../../models/Customer";
import CustomersList from "../../components/templates/CustomersList";
import Link from "next/link";
import { BsPersonAdd  } from "react-icons/bs";
// import { useEffect } from "react";

const CustomersPage = ({ customers, error }) => {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/customer");
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center bg-[#212121]">
      <div className="h-60 w-full flex flex-row justify-center items-center">
        <Link
        href={'/addCustomer'}
        className="h-auto w-2/12 flex flex-row justify-center items-center gap-2 text-white bg-[#2B2C30] rounded-[4px] py-4 px-2 uppercase">
          <p className="font-Inter font-light text-[1rem]">
          Add New Customer
          </p>
          <BsPersonAdd className="text-[1.25rem] relative -top-[2px]"/>
        </Link>
      </div>
      <CustomersList customers={customers} />
    </div>
  );
}

export default CustomersPage;

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (err) {
    return {
      props: {
        error: {
          message: err.message
        }
      }
    }
  }
}