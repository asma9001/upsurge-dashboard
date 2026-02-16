import { Upload, Save } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { supabase } from "../config/supabaseClient";
import { toast } from "react-toastify";

export default function EditAbout() {
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  // Fetch about info from Supabase
  useEffect(() => {
    const fetchAbout = async () => {
      const { data, error } = await supabase.from("about").select("*").single();
      if (error) {
        console.error("Error fetching about:", error.message);
      } else if (data) {
        setDescription(data.description);
        setImagePreview(data.image_url || "/about-img.jpg");
      }
    };

    fetchAbout();
  }, []);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

const handleSave = async () => {
  setLoading(true);

  let image_url = imagePreview;

  try {
    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `team-image.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("about-images")
        .upload(fileName, imageFile, { upsert: true });

      if (uploadError) throw uploadError;

      image_url =
        supabase.storage
          .from("about-images")
          .getPublicUrl(fileName).data.publicUrl;
    }

    const { error } = await supabase.from("about").upsert({
      id: 1,
      description,
      image_url,
      updated_at: new Date(),
    });

    if (error) throw error;

    toast.success("About Us updated successfully");
  } catch (error) {
    console.error(error.message);
    toast.error("Something went wrong ❌");
  }

  setLoading(false);
};


  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-[#111827] mb-6">
            Edit About Us Content
          </h2>

          {/* Description */}
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

          {/* Current Image */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm font-medium text-[#374151] mb-3">
              Current Team Image
            </p>
            <img
              src={imagePreview || "/about-img.jpg"}
              alt="Team"
              className="w-full h-52 sm:h-[220px] object-cover rounded-lg"
            />
          </div>

          {/* Upload Image */}
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

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex items-center gap-2 bg-[#5856D6] text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium"
            >
              <Save size={16} />
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
        
      </div>
    </DashboardLayout>
  );
}
