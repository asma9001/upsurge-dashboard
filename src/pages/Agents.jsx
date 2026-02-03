import { useState } from "react";
import AgentCard from "../components/AgentCard";
import DashboardLayout from "../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import AddAgent from "./AddAgent";

const agents = [
    {
        name: "Helen Edwards-Jackson",
        role: "Broker-in-Charge",
        license: "29256",
        email: "helen@upsurgerealty.com",
        image: "/agent1.png",
        office: "(704) 555-0101",
        cell: "(704) 555-0102",
    },
    {
        name: "James Edwards III",
        role: "REALTOR®",
        license: "340034",
        email: "james@upsurgerealty.com",
        image: "/agent2.jpg",
        office: "(704) 555-0101",
        cell: "(704) 555-0102",
    },
    {
        name: "Nathalie Fongang",
        role: "REALTOR®",
        license: "313452",
        email: "nathalia@upsurgerealty.com",
        office: "(704) 555-0101",
        cell: "(704) 555-0102",
        image: "/agent3.jpg",
    },
    {
        id: 4,
        name: "Trever Swint",
        role: "REALTOR®",
        license: "Lic: NC-123456",
        email: "trever@upsurgerealty.com",
        office: "(704) 555-0101",
        cell: "(704) 555-0102",
        image: "/agent4.jpg",
        description: "With over 15 years of experience in the Charlotte real estate market,Helen brings unparalleled expertise and dedication to every transaction.As our Broker-in -Charge, she leads our team with integrity and a commitment to excellence.Her deep understanding of luxury properties and investment opportunities has helped countless clients achieve their real estate goals.",
    },
    {
        id: 5,
        name: "Trever Swint",
        role: "REALTOR®",
        license: "Lic: NC-123456",
        email: "trever@upsurgerealty.com",
        office: "(704) 555-0101",
        cell: "(704) 555-0102",
        image: "/agent4.jpg",
        description: "With over 15 years of experience in the Charlotte real estate market,Helen brings unparalleled expertise and dedication to every transaction.As our Broker-in -Charge, she leads our team with integrity and a commitment to excellence.Her deep understanding of luxury properties and investment opportunities has helped countless clients achieve their real estate goals.",
    },
    {
        id: 6,
        name: "Trever Swint",
        role: "REALTOR®",
        license: "Lic: NC-123456",
        email: "trever@upsurgerealty.com",
        office: "(704) 555-0101",
        cell: "(704) 555-0102",
        image: "/agent4.jpg",
        description: "With over 15 years of experience in the Charlotte real estate market,Helen brings unparalleled expertise and dedication to every transaction.As our Broker-in -Charge, she leads our team with integrity and a commitment to excellence.Her deep understanding of luxury properties and investment opportunities has helped countless clients achieve their real estate goals.",
    },
    {
        id: 7,
        name: "Trever Swint",
        role: "REALTOR®",
        license: "Lic: NC-123456",
        email: "trever@upsurgerealty.com",
        office: "(704) 555-0101",
        cell: "(704) 555-0102",
        image: "/agent4.jpg",
        description: "With over 15 years of experience in the Charlotte real estate market,Helen brings unparalleled expertise and dedication to every transaction.As our Broker-in -Charge, she leads our team with integrity and a commitment to excellence.Her deep understanding of luxury properties and investment opportunities has helped countless clients achieve their real estate goals.",
    },
];

export default function Agents() {
    const [showAddAgent, setShowAddAgent] = useState(false);

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(agents.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentAgents = agents.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <DashboardLayout>
            <div className="p-4">
                {/* Header */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setShowAddAgent(true)}
                        className=" cursor-pointer flex items-center gap-2 bg-[#5856D6] text-white px-7 py-2 rounded-lg text-sm font-medium shadow-md"
                    >
                        + Add Agent
                    </button>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentAgents.map((agent, index) => (
                        <AgentCard key={index} agent={agent} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-end items-center gap-2 mt-8">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 text-sm rounded-md border disabled:opacity-40"
                        >
                            Prev
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 text-sm rounded-md border
                  ${currentPage === i + 1
                                        ? "bg-[#5856D6] text-white border-[#5856D6]"
                                        : "hover:bg-gray-100"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() =>
                                setCurrentPage((p) => Math.min(p + 1, totalPages))
                            }
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 text-sm rounded-md border disabled:opacity-40"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
            {showAddAgent && (
                <AddAgent onClose={() => setShowAddAgent(false)} />
            )}
        </DashboardLayout>
    );
}
