import { X, Camera } from "lucide-react";

const AddAgent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3 sm:px-4">
      <div className="w-full max-w-md max-h-[90vh] rounded-2xl bg-white shadow-xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#F3F4F6]">
          <h2 className="text-base sm:text-lg font-bold text-[#111827]">
            Add New Agent
          </h2>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6">

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-4 border-[#E0E7FF] bg-[#F3F4F6]">
                <svg
                  className="h-7 w-7 sm:h-8 sm:w-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0"
                  />
                </svg>
              </div>

              <div className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">
                <Camera size={14} />
              </div>
            </div>
            <p className="mt-2 text-sm text-[#6B7280]">Agent Photo</p>
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm font-medium text-[#374151]">Photo URL</label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="mt-1 w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <p className="mt-1 text-xs text-[#9CA3AF]">
              Paste an image URL or leave blank for auto-generated avatar
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-[#374151]">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Sarah Johnson"
              className="mt-1 w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#374151]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="sarah@example.com"
                className="mt-1 w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#374151]">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="(555) 123-4567"
                className="mt-1 w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Role + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#374151]">
                Specialty / Role
              </label>
              <select className="mt-1 w-full rounded-lg border border-[#D1D5DB] bg-white px-3 py-2 text-sm">
                <option>Real Estate Agent</option>
                <option>Broker</option>
                <option>Manager</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-[#374151]">
                Location
              </label>
              <input
                type="text"
                placeholder="New York, NY"
                className="mt-1 w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row gap-3 px-4 sm:px-6 py-4 border-t border-[#F3F4F6] bg-white">
          <button
            onClick={onClose}
            className="w-full sm:w-auto rounded-lg border border-[#D1D5DB] px-8 py-3 text-sm font-medium text-[#374151]"
          >
            Cancel
          </button>

          <button className="w-full sm:w-auto rounded-lg bg-[#4F46E5] shadow-md px-8 py-3 text-sm font-medium text-white">
            Add Agent
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddAgent;
