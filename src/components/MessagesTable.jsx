import { HiArrowRight } from "react-icons/hi";

export default function MessagesTable() {
    return (
        <div className="w-full bg-white border border-[#E5E7EB] rounded-2xl shadow-sm">
           
            <div className="flex items-center justify-between px-6 py-6 ">
                <h2 className="text-lg font-semibold text-[#111827]">
                    Recent Messages
                </h2>
                <button   onClick={() => navigate("/messages")} className="cursor-pointer flex items-center gap-1 text-sm text-[#4B5563] font-medium">
                    View All <HiArrowRight className="w-4 h-4" />
                </button>
            </div>

          

            <div className="hidden md:grid grid-cols-12 bg-[#F9FAFB] px-6 py-3 text-sm font-medium text-[#6B7280] border-[#E5E7EB] rounded-t-xl border">
                <div className="col-span-8">From</div>
                <div className="col-span-2 text-center">Date</div>
                <div className="col-span-2 text-center">Status</div>
            </div>


          
            {[
                { name: "John Smith", date: "25/10/2023", status: "Unread" },
                { name: "Sarah Johnson", date: "24/10/2023", status: "Read" },
                { name: "Michael Brown", date: "23/10/2023", status: "Read" }
            ].map((msg, i) => (
                <div className="px-6 py-4 border-b border-[#E5E7EB] last:border-b-0"><div className="flex flex-col md:grid md:grid-cols-12 md:items-center gap-4 md:gap-0">

                  
                    <div className="md:col-span-4 flex items-center gap-4">

                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                {msg.name}
                            </p>

                        </div>
                    </div>

                  
                    <div className="md:col-span-4 text-sm font-medium text-gray-900 md:text-right">
                        <span className="md:hidden text-gray-500 mr-1">Price:</span>
                        {msg.date}
                    </div>

                   
                    <div className="col-span-4 flex ">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${msg.status === "Unread"
                                ? "bg-red-100 text-red-600"
                                : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            {msg.status}
                        </span>
                    </div>

                </div></div>

            ))}
        </div>
    );
}  