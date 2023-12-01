const deleteCustomer = async (_id, router) => {
  try {
    const response = await fetch(`/api/delete/${_id}`, {
      method: "DELETE",
    });
    const { status } = await response.json();
    if (status === "success") router.reload();
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
};

export default deleteCustomer;