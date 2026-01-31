import { Upload, Lock, Save } from "lucide-react";
import { useState, useRef } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function ProfileSettings() {
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=256&q=80"
  );
  const [name, setName] = useState("Queen helen");
  const [email, setEmail] = useState("Helen@gmail.com");
  const [password, setPassword] = useState("********");
  const [newPassword, setNewPassword] = useState("********");
  const [confirmNewPassword, setConfirmNewPassword] = useState("********");

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProfileImage(url);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">

        {/* Profile Information */}
        <section className="bg-white rounded-xl shadow-md border border-[#E5E7EB] p-4 sm:p-6 flex flex-col md:flex-row gap-6 md:gap-8">

          {/* Left side: Photo */}
          <div className="flex flex-col items-center md:items-start space-y-2 flex-shrink-0">
            <h3 className="flex items-center gap-2 font-semibold text-[#111827] text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A4 4 0 0112 15.999a4 4 0 016.879 1.805M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Profile Information
            </h3>

            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-24 h-24 sm:w-28 sm:h-28 object-cover"
            />
            <p className="text-[#374151] font-medium text-sm">Change Photo</p>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />

            <button
              onClick={() => fileInputRef.current.click()}
              className="border border-gray-300 rounded-lg w-28 sm:w-32 h-12 flex flex-col items-center justify-center text-gray-400 text-sm cursor-pointer hover:border-indigo-500 transition"
            >
              <Upload className="w-5 h-5 mb-1" />
              Upload
            </button>
          </div>

          {/* Right side: Name and Email */}
          <div className="flex-1 grid grid-cols-1 gap-4 sm:gap-6">

            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full sm:w-1/2 bg-[#F2F2F2] rounded-lg py-2 px-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-1/2 bg-[#F2F2F2] rounded-lg py-2 px-3 outline-none"
              />
            </div>
          </div>
        </section>

        {/* Change Password */}
        <section className="bg-white rounded-xl shadow-md border border-[#E5E7EB] p-4 sm:p-6 space-y-4 sm:space-y-6">
          <h3 className="flex items-center gap-2 font-semibold text-[#111827] text-lg">
            <Lock className="w-5 h-5" />
            Change Password
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                readOnly
                className="w-full sm:w-1/2 bg-[#F2F2F2] rounded-lg py-2 px-3 text-[#374151] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full sm:w-1/2 bg-[#F2F2F2] rounded-lg py-2 px-3 text-[#374151] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="w-full sm:w-1/2 bg-[#F2F2F2] rounded-lg py-2 px-3 text-[#374151] outline-none"
              />
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#5856D6] shadow-md text-white px-4 sm:px-5 py-2 rounded-lg text-sm font-medium">
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
