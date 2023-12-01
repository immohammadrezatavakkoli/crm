import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomerDetailsPage from "../../components/templates/CustomerDetailsPage";
import Loading from "../../components/templates/Loading";

const Customer = () => {
  
  const [customerData, setCustomerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();

  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          setCustomerData(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(true);
          setLoading(false);
        });
    }
  }, [isReady, customerId]);

  if (loading) return <Loading />;

  if (error) return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#212121] font-Questrial text-white uppercase">
      <p className="text-[1rem]">
      Customer with this ID was not found
      </p>
    </div>
  );

  if (!isReady) return <Loading />;

  if (customerData) {
    return <CustomerDetailsPage data={customerData} />;
  } else {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#212121] font-Questrial text-white uppercase">
        <p className="text-[1rem]">
        Customer with this ID was not found
        </p>
      </div>
    );
  }
};

export default Customer;
