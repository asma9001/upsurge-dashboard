import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useState, useEffect } from "react";

export default function EditProperty() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const property = state?.property;

  // Redirect if no property is passed
  useEffect(() => {
    if (!property) navigate("/properties");
  }, [property, navigate]);

  const [title, setTitle] = useState(property?.title || "");
  const [location, setLocation] = useState(property?.location || "");
  const [price, setPrice] = useState(property?.price || "");
  const [status, setStatus] = useState(property?.status || "Active");
  const [image, setImage] = useState(property?.image || "");
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

 
  const handleUpdate = () => {
    const updatedProperty = { title, location, price, status, image };
    console.log("Updated property:", updatedProperty);
    alert("Property updated successfully!");
    navigate("/properties");
  };

  if (!property) return null;

  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6">
        <div className="max-w-2xl mx-auto">

          
          <div className="flex items-center gap-2 mb-6">
            <ArrowLeft
              className="w-5 h-5 text-gray-600 cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <h1 className="text-lg font-bold text-[#111827]">Edit Property</h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 space-y-4">

        
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter property title"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-100 text-sm outline-none placeholder-gray-400"
              />
            </div>

        
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter property location"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-100 text-sm outline-none placeholder-gray-400"
              />
            </div>

      
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Price
              </label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter property price"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-100 text-sm outline-none placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-gray-100 text-sm outline-none"
              >
                <option value="Active">Active</option>
                <option value="Sold">Sold</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

       
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Property Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl h-40 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition relative">
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
                {image ? (
                  <img src={image} alt="Property" className="h-full object-contain" />
                ) : (
                  <>
                    <Upload className="w-5 h-5 mb-2" />
                    <span className="text-xs font-medium">Upload Image</span>
                  </>
                )}
              </div>
            </div>

           
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Date Added
              </label>
              <input
                type="text"
                value={property.date}
                readOnly
                className="w-full px-4 py-2.5 rounded-lg bg-gray-100 text-sm outline-none text-gray-500 cursor-not-allowed"
              />
            </div>

          </div>

         
          <div className="flex justify-end">
            <button
              onClick={handleUpdate}
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow hover:bg-indigo-700 transition"
            >
              Update Property
            </button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
