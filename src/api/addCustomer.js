const addCustomer = async (values, router) => {
  try {
    const res = await fetch("/api/customer", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.message === "success") {
    console.log("Information saved successfully.");
    router.push("/customers");
    } else if (data.message === "Duplicate key error") {
    const keys = Object.keys(data.keyValue);
    const Key = keys[0];
    alert(`Your ${Key} is duplicate and has already been registered`);
    }
  } catch (error) {
    console.log("Error sending request:", error);
  }
};

export default addCustomer;