import React, { useEffect, useState } from "react";
import api from "../services/api";
import MedicineList from "../components/MedicineList";
import AddMedicine from "../components/AddMedicine";

const Dashboard = () => {
  const [medicines, setMedicines] = useState([]);
  const [editingMedicine, setEditingMedicine] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // ================= FETCH MEDICINES =================
  const fetchMedicines = async () => {
    try {
      const res = await api.get("/medicines");
      setMedicines(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  // ================= ADD / UPDATE MEDICINE =================
  const handleFormSubmit = async (formData) => {
    try {
      if (editingMedicine) {
        // UPDATE
        await api.put(`/medicines/${editingMedicine._id}`, formData);
      } else {
        // ADD
        await api.post("/medicines", formData);
      }

      setShowForm(false);
      setEditingMedicine(null);
      fetchMedicines();
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save medicine");
    }
  };

  // ================= EDIT =================
  const handleEdit = (medicine) => {
    setEditingMedicine(medicine);
    setShowForm(true);
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this medicine?")) return;

    try {
      await api.delete(`/medicines/${id}`);
      fetchMedicines();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete medicine");
    }
  };

  // ================= UI =================
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">💊 Medicine Dashboard</h1>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => {
            setEditingMedicine(null);
            setShowForm(true);
          }}
        >
          Add Medicine
        </button>
      </div>

      {showForm && (
        <AddMedicine
          medicine={editingMedicine}
          onSubmit={handleFormSubmit}
        />
      )}

      <div className="mt-6">
        <MedicineList
          medicines={medicines}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Dashboard;
