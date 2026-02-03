import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import PropertiesTable from "../components/PropertiesTable";
import MessagesTable from "../components/MessagesTable";
import { Home, MessageSquare, FileText } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-6">
        <StatCard
          title="Total Properties"
          value="5"
          icon={<img src="/logo.svg" className="w-5 h-5 text-[#4B5563]" />}
          bg="bg-[#EFF6FF]"
        />
        <StatCard
          title="Total Messages"
          value="3"
          icon={<MessageSquare size={18} />}
          bg="bg-[#F0FDF4]"
        />
        <StatCard
          title="Total Blogs"
          value="3"
          icon={<FileText size={18} />}
          bg="bg-[#FAF5FF]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 px-4 my-4">
        {/* Add Property Button */}
        <button
          onClick={() => navigate("/add-property")}
          className="flex items-center gap-2 text-sm bg-[#5856D6] text-white px-4 py-1 rounded-lg font-medium hover:bg-[#4b45c9] transition"
        >
          <span className="text-xl">+</span> Add Property
        </button>

        {/* Add Blog Button */}
        <button
          onClick={() => navigate("/add-blog")}
          className="flex items-center gap-2 text-sm border border-gray-300 text-gray-700 px-4 py-1 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          <span className="text-xl">+</span> Add Blog Post
        </button>

        {/* Edit About Button */}
        <button
          onClick={() => navigate("/about")}
          className="border border-gray-300 text-sm text-gray-700 px-4 py-1 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Edit About Us
        </button>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-4">
        <PropertiesTable />
        <MessagesTable />
      </div>

    </DashboardLayout>
  );
}
