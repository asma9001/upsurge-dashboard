import { ArrowLeft, Upload, Save } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";

export default function AddProperty() {
    const navigate = useNavigate()
    return (
        <DashboardLayout>  <div className="p-6 max-w-4xl mx-auto">
           
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigate("/properties")}>
                <ArrowLeft className="w-5 h-5 text-gray-600" />
                <h1 className="text-lg font-bold text-[#111827]">
                    Add New Property
                </h1>
            </div>

           
            <div className="grid grid-cols-1   lg:grid-cols-[2fr_1fr] gap-6">

         
                <div className="space-y-6">
          
                    <div className="bg-white border border-[#E5E7EB] shadow-sm rounded-xl p-6">
                        <h2 className="font-semibold text-[#111827] mb-4">
                            Basic Information
                        </h2>

                        <div className="space-y-4">
                            <Input
                                label="Property Title"
                                placeholder="Enter Property title"
                                className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm placeholder-[#CCCCCC]"
                                labelClassName="block text-sm font-medium text-[#374151] mb-2"
                            />



                           
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label="Price ($)" placeholder="$0.0" className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm  placeholder-[#CCCCCC]"
                                    labelClassName="block text-sm font-medium text-[#374151] mb-2" />
                                <Input label="Category" placeholder="Enter category" className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm  placeholder-[#CCCCCC]"
                                    labelClassName="block text-sm font-medium text-[#374151] mb-2" />
                            </div>

                        
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label="City" placeholder="Enter city" className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm  placeholder-[#CCCCCC]"
                                    labelClassName="block text-sm font-medium text-[#374151] mb-2" />
                                <Input label="State" placeholder="Enter State" className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm  placeholder-[#CCCCCC]"
                                    labelClassName="block text-sm font-medium text-[#374151] mb-2" />
                            </div>

                        
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Input label="Bedrooms" placeholder="0" className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm  placeholder-[#CCCCCC]"
                                    labelClassName="block text-sm font-medium text-[#374151] mb-2" />
                                <Input label="Bathrooms" placeholder="0" className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm  placeholder-[#CCCCCC]"
                                    labelClassName="block text-sm font-medium text-[#374151] mb-2" />
                                <Input label="Sqft" placeholder="0" className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm  placeholder-[#CCCCCC]"
                                    labelClassName="block text-sm font-medium text-[#374151] mb-2" />
                            </div>

                          
                            <div>
                                <label className="text-sm font-medium text-[#374151] mb-1 block">
                                    Description
                                </label>
                                <textarea
                                    placeholder="Describe the property..."
                                    rows={4}
                                    className="w-full  rounded-lg px-4 py-3 text-sm bg-[#F2F2F2]  placeholder-[#CCCCCC]"
                                />
                            </div>
                        </div>
                    </div>

             
                    <div className="bg-white border border-[#E5E7EB] shadow-sm rounded-xl p-6">
                        <h2 className="font-semibold text-[#111827] mb-4">
                            Property images
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="border-2 border-dashed border-[#D1D5DB] rounded-xl h-28 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-indigo-500"
                                >
                                    <Upload className="w-5 h-5 mb-1" />
                                    <span className="text-xs text-[#6B7280] font-medium ">Upload</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-white border border-[#E5E7EB] shadow-sm rounded-xl p-6 h-fit">
                    <h2 className="font-semibold text-[#111827] mb-4">
                        Status & Visibility
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm text-[#374151] font-medium mb-1 block">
                                Status
                            </label>
                            <select className="w-full border text-[#111827] bg-[#F4F4F4] border-gray-200 rounded-lg px-4 py-3 text-sm">
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Sold</option>
                            </select>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 bg-[#5856D6] text-white py-3 rounded-lg text-sm font-medium">
                            <Save size={16} />
                            Save Property
                        </button>
                    </div>
                </div>
            </div>
        </div></DashboardLayout>

    );
}

const Input = ({ label, placeholder, className, labelClassName }) => (
    <div>
        <label className={labelClassName || "text-sm text-gray-600 mb-1 block"}>
            {label}
        </label>
        <input
            type="text"
            placeholder={placeholder}
            className={
                className ||
                "w-full border border-gray-200 bg-white rounded-lg px-4 py-3 text-sm"
            }
        />
    </div>
);
