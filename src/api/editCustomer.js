const editCustomer = async (data, values, router, setEditMode) => {
  try {
    const response = await fetch(`/api/edit/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    });
    const { status } = await response.json();
    if (status === "success") {
      console.log("Information saved successfully.");
      router.push("/");
    }
    setEditMode(false);
  } catch (error) {
    console.error("Error saving information:", error);
  }
};

export default editCustomer;