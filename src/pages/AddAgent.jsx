import { X, Camera } from "lucide-react";
import { useRef, useState } from "react";

const AddAgent = ({ onClose }) => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3 sm:px-4">
      <div className="w-full max-w-md max-h-[90vh] rounded-2xl bg-white shadow-xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#F3F4F6]">
          <h2 className="text-base sm:text-lg font-bold text-[#111827]">
            Agent Photo
          </h2>
          <button onClick={onClose}>
            <X className="h-5 w-5 cursor-pointer text-[#9CA3AF] " />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6">

          {/* Avatar Upload */}
          <div className="flex flex-col items-center">
            <div
              className="relative cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-4 border-[#E0E7FF] bg-[#F3F4F6] overflow-hidden">
                {preview ? (
                  <img
                    src={preview}
                    alt="Agent Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                 <img src="/avatar.svg" className="w-14 h-7"/>
                )}
              </div>

              <div className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#5856D6] text-white">
                 <img src="/camera.svg" className="w-4 h-4 filter invert brightness-0"/>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <p className="mt-2 text-sm text-[#6B7280]">
               Agent Photo
            </p>
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm font-medium text-[#374151]">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              onChange={(e) => setPreview(e.target.value)}
              className="mt-1 w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <p className="mt-1 text-xs text-[#9CA3AF]">
              Upload image or paste URL
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-[#374151]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Sarah Johnson"
              className="mt-1 w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm"
            />
          </div>

          {/* Role + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select className="rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm">
              <option>Real Estate Agent</option>
              <option>Broker</option>
              <option>Manager</option>
            </select>
            <input
              type="text"
              placeholder="Location"
              className="rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm"
            />
          </div>
        </div>

     
         {/* Footer */}
                <div className="flex md:flex-row flex-col justify-between gap-3 px-6 py-4 border-t border-[#F3F4F6] bg-white">
                    <button
                        onClick={onClose}
                        className="rounded-lg cursor-pointer border border-[#D1D5DB] px-16 py-3 text-sm font-medium text-[#374151]"
                    >
                        Cancel
                    </button>

                    <button className="rounded-lg cursor-pointer bg-[#4F46E5] shadow-md px-16 py-3 text-sm font-medium text-white">
                        Add Agent
                    </button>

                </div>

      </div>
    </div>
  );
};

export default AddAgent;
