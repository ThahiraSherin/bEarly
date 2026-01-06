import React from "react";

const MedicineList = ({ medicines, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Quantity</th>
            <th className="py-2 px-4 border">Min Stock</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Expiry</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med) => {
            const lowStock = med.quantity < med.minStock;
            const expiry = med.expiryDate || med.expiry || "";
            const expiringSoon = expiry
              ? new Date(expiry) < new Date(new Date().setDate(new Date().getDate() + 30))
              : false;
            const keyId = med._id || med.id;
            return (
              <tr key={keyId}>
                <td className="py-2 px-4 border">{med.name}</td>
                <td className="py-2 px-4 border">{med.quantity}</td>
                <td className="py-2 px-4 border">{med.minStock}</td>
                <td className="py-2 px-4 border">{med.price}</td>
                <td className="py-2 px-4 border">{expiry ? expiry.split("T")[0] : ""}</td>
                <td className="py-2 px-4 border">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      lowStock ? "bg-red-500" : expiringSoon ? "bg-yellow-500" : "bg-green-500"
                    }`}
                  >
                    {lowStock ? "Low Stock" : expiringSoon ? "Expiring Soon" : "Good"}
                  </span>
                </td>
                <td className="py-2 px-4 border flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    onClick={() => onEdit(med)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => onDelete(keyId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineList;
