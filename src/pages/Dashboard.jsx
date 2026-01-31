import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import PropertiesTable from "../components/PropertiesTable";
import MessagesTable from "../components/MessagesTable";
import { Home, MessageSquare, FileText } from "lucide-react";

export default function Dashboard() {
    return (
        <DashboardLayout>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-6 mb-6">
                <StatCard title="Total Properties" value="5" icon={<img src="/logo.svg" className="w-5 h-5 text-[#4B5563]" />} bg="bg-[#EFF6FF]" />
                <StatCard title="Total Messages" value="3" icon={<MessageSquare size={18} />} bg="bg-[#F0FDF4]" />
                <StatCard title="Total Blogs" value="3" icon={<FileText size={18} />} bg="bg-[#FAF5FF]" />
            </div>

            {/* Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 px-4 gap-3 ✅
">
                <PropertiesTable />
                <MessagesTable />
            </div>

        </DashboardLayout>
    );
}
