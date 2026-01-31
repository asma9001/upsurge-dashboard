import { Mail } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";

const messages = [
    {
        id: 1,
        name: "John Smith",
        email: "john.smith@example.com",
        phone: "(555) 123-4567",
        message: "I am interested in the Waterfront Villa. Is it still available?",
        date: "25/10/2023 14:30",
        status: "Unread",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah.j@example.com",
        phone: "(555) 987-6543",
        message:
            "Can you schedule a viewing for the Downtown Penthouse this weekend?",
        date: "24/10/2023 20:20",
        status: "Read",
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "m.brown@example.com",
        phone: "(555) 456-7890",
        message: "Do you have any other properties in Austin under $900k?",
        date: "23/10/2023 16:45",
        status: "Read",
    },
];

export default function Messages() {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;


    // ✅ Fixed search logic
    const filteredMessages = messages.filter((item) =>
        `${item.name} ${item.email} ${item.message}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredMessages.length / rowsPerPage) || 1;

    const paginatedMessages = filteredMessages.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <DashboardLayout>
            <div className="px-4 py-4">
                {/* Search */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search messages..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full sm:w-64 px-6 py-2 text-sm bg-[#F3F4F6] rounded-full outline-none"
                    />
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-[#E5E7EB] shadow-sm rounded-xl">
                    <table className="min-w-[900px] w-full text-sm">
                        <thead className="bg-[#F9FAFB] text-[#6B7280]">
                            <tr>
                                <th className="text-left px-6 py-4 font-medium">Sender</th>
                                <th className="text-left px-6 py-4 font-medium">Message</th>
                                <th className="text-left px-6 py-4 font-medium">Date</th>
                                <th className="text-left px-6 py-4 font-medium">Status</th>
                                <th className="text-right px-6 py-4 font-medium">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedMessages.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b last:border-b-0 border-gray-100 hover:bg-gray-50 transition"
                                >
                                    {/* Sender */}
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{item.name}</p>
                                            <p className="text-xs text-gray-400">{item.email}</p>
                                            <p className="text-xs text-gray-400">{item.phone}</p>
                                        </div>
                                    </td>

                                    {/* Message */}
                                    <td className="px-6 py-4 text-gray-600 max-w-md">
                                        <p className="line-clamp-2">{item.message}</p>
                                    </td>

                                    {/* Date */}
                                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                                        {item.date}
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 text-xs rounded-full font-medium ${item.status === "Unread"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-gray-100 text-gray-600"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4 text-right">
                                        <Mail
                                            onClick={() =>
                                                navigate(`/message-detail/${item.id}`, {
                                                    state: { message: item },
                                                })
                                            }
                                            className="w-4 h-4 text-gray-400 hover:text-indigo-600 cursor-pointer"
                                        />


                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-end gap-3 mt-4">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50 text-sm"
                    >
                        Prev
                    </button>

                    <span className="text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() =>
                            setCurrentPage((p) => Math.min(p + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50 text-sm"
                    >
                        Next
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
