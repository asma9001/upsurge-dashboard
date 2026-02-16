export default function StatCard({ title, value, icon, bg }) {
    return (
        <div className="bg-white border-l-4 border border-[#E5E7EB] rounded-xl p-5 flex items-center justify-between">
            <div>
                <p className="text-sm text-[#6B7280] font-medium">{title}</p>
                <h3 className="text-2xl font-semibold mt-1">{value}</h3>
            </div>
            <div className={`w-10 h-10 rounded-lg text-[#111827] font-bold flex items-center justify-center ${bg}`}>
                {icon}
            </div>
        </div>
    );
}
