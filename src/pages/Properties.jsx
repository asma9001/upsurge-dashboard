"use client";

import { Pencil, Trash2, Plus } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialProperties = [
    {
        id: 1,
        title: "Modern Waterfront Villa",
        type: "House",
        location: "Miami, FL",
        price: "$2,500,000",
        status: "Active",
        statusStyle: "bg-green-100 text-green-700",
        date: "15/10/2023",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
    },
    {
        id: 2,
        title: "Downtown Luxury Penthouse",
        type: "Apartment",
        location: "New York, NY",
        price: "$1,200,000",
        status: "Active",
        statusStyle: "bg-green-100 text-green-700",
        date: "18/10/2023",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100",
    },
    {
        id: 3,
        title: "Cozy Mountain Cabin",
        type: "House",
        location: "Aspen, CO",
        price: "$450,000",
        status: "Sold",
        statusStyle: "bg-gray-100 text-gray-600",
        date: "05/09/2023",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100",
    },
];

export default function Properties() {
    const [properties, setProperties] = useState(initialProperties);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const navigate = useNavigate();

    // Filtered and paginated properties
    const filteredProperties = properties.filter((item) =>
        `${item.title} ${item.location} ${item.type}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProperties.length / rowsPerPage) || 1;

    const paginatedProperties = filteredProperties.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

 
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            setProperties((prev) => prev.filter((prop) => prop.id !== id));
        }
    };

    return (
        <DashboardLayout>
            <div className="bg-white px-4 rounded-xl">

                {/* Top Controls */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full md:w-64 px-6 py-2 text-sm bg-gray-100 rounded-full outline-none"
                    />

                    <button
                        onClick={() => navigate("/add-property")}
                        className="cursor-pointer flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow"
                    >
                        <Plus size={16} />
                        Add Property
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                    <table className="min-w-full text-sm divide-y divide-gray-200">
                        <thead className="bg-gray-50 text-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left font-semibold">Property</th>
                                <th className="px-6 py-3 text-left font-semibold">Location</th>
                                <th className="px-6 py-3 text-left font-semibold">Price</th>
                                <th className="px-6 py-3 text-left font-semibold">Status</th>
                                <th className="px-6 py-3 text-left font-semibold">Date Added</th>
                                <th className="px-6 py-3 text-right font-semibold">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {paginatedProperties.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-12 h-12 rounded-lg object-cover"
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-900">{item.title}</p>
                                                <p className="text-xs text-gray-500">{item.type}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">{item.location}</td>
                                    <td className="px-6 py-4 font-medium">{item.price}</td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 text-xs rounded-full font-medium ${item.statusStyle}`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-gray-600">{item.date}</td>

                                    <td className="px-6 py-4 text-right">
                                        <div className="inline-flex gap-3 text-gray-400">
                                            <Pencil
                                                className="w-4 h-4 cursor-pointer hover:text-indigo-600"
                                                onClick={() =>
                                                    navigate(`/edit-property/${item.id}`, { state: { property: item } })
                                                }
                                            />
                                            <Trash2
                                                className="w-4 h-4 cursor-pointer hover:text-red-500"
                                                onClick={() => handleDelete(item.id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-end gap-3 py-4">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <span className="text-sm">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
