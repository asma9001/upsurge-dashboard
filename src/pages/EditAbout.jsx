import { Upload, Save } from "lucide-react";
import { useState, useRef } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function EditAbout() {
  const [description, setDescription] = useState(
    "We are a premier real estate agency dedicated to finding your dream home. With over 20 years of experience in the luxury market, we provide unparalleled service and expertise."
  );

  const [imagePreview, setImagePreview] = useState("/about-img.jpg");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  return (
    <DashboardLayout>
      <div className=" p-4 sm:p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 p-4 sm:p-6">

        
          <h2 className="text-lg font-semibold text-[#111827] mb-6">
            Edit About Us Content
          </h2>

       
          <div className="mb-6 sm:mb-8">
            <label className="block text-sm font-medium text-[#374151] mb-2">
              Company Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#F4F4F4] border border-gray-200 rounded-lg p-3 sm:p-4 text-sm text-[#111827] resize-none outline-none"
            />
          </div>

        
          <div className="mb-6 sm:mb-8">
            <p className="text-sm font-medium text-[#374151] mb-3">
              Current Team Image
            </p>
            <img
              src={imagePreview}
              alt="Team"
              className="w-full h-52 sm:h-[220px] object-cover rounded-lg"
            />
          </div>

       
          <div className="mb-6 sm:mb-10">
            <p className="text-sm font-medium text-[#374151] mb-3">
              Update Team Image
            </p>

        
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />

         
            <div
              onClick={() => fileInputRef.current.click()}
              className="w-full sm:w-40 h-32 border-2 border-dashed border-[#D1D5DB] rounded-lg flex flex-col items-center justify-center text-[#6B7280] text-sm cursor-pointer"
            >
              <Upload className="w-5 h-5 mb-1" />
              Upload
            </div>
          </div>

  
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-[#5856D6] text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
              <Save size={16} />
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
