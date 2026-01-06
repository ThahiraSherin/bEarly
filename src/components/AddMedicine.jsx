import React, { useEffect, useState } from "react";

const AddMedicine = ({ medicine, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    expiryDate: "",
  });

  useEffect(() => {
    if (medicine) {
      setFormData({
        name: medicine.name || "",
        quantity: medicine.quantity || "",
        price: medicine.price || "",
        expiryDate: medicine.expiryDate?.slice(0, 10) || "",
      });
    }
  }, [medicine]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-4"
    >
      <input
        name="name"
        placeholder="Medicine Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />

      <input
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />

      <input
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />

      <input
        type="date"
        name="expiryDate"
        value={formData.expiryDate}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {medicine ? "Update Medicine" : "Add Medicine"}
      </button>
    </form>
  );
};

export default AddMedicine;
