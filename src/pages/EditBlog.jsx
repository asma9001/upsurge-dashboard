import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

// Sample blog data (replace with API)
const blogs = [
  {
    id: 1,
    title: "Guide to First-Time Home Buying",
    content: "This is blog content...",
    date: "2023-10-10",
    status: "Published",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300",
  },
  {
    id: 2,
    title: "Investment Opportunities in Commercial Real Estate",
    content: "Investment blog content...",
    date: "2023-10-20",
    status: "Draft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300",
  },
];

export default function EditBlog() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Get blog from state or fallback
  const blog = state?.blog || blogs.find((b) => b.id === Number(id));

  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  const [status, setStatus] = useState(blog?.status || "Draft");
  const [image, setImage] = useState(blog?.image || null);
  const [preview, setPreview] = useState(blog?.image || null);

  if (!blog) {
    return (
      <DashboardLayout>
        <p className="text-center mt-20 text-gray-500">Blog not found</p>
      </DashboardLayout>
    );
  }

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Update handler
  const handleUpdate = () => {
    const updatedBlog = {
      id: blog.id,
      title,
      content,
      status,
      image,
    };
    console.log("UPDATED BLOG:", updatedBlog);
    alert("Blog updated successfully!");
    navigate("/blogs");
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">

          
          <div className="flex items-center gap-2">
            <ArrowLeft
              onClick={() => navigate(-1)}
              className="w-5 h-5 text-gray-600 cursor-pointer"
            />
            <h1 className="text-xl font-bold text-gray-900">Edit Blog Post</h1>
          </div>

     
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

        
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
                <option value="Archived">Archived</option>
              </select>
            </div>

        
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={blog.date}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 cursor-not-allowed"
              />
            </div>

        
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cover Image
              </label>
              <label className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex items-center justify-center cursor-pointer relative overflow-hidden hover:bg-gray-50">
                {preview && (
                  <img
                    src={preview}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {!preview && (
                  <div className="flex flex-col items-center text-gray-400">
                    <Upload className="w-5 h-5 mb-1" />
                    <span className="text-xs">Upload Image</span>
                  </div>
                )}
                <input type="file" hidden onChange={handleImageUpload} />
              </label>
            </div>

          
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

         
            <div className="flex justify-end">
              <button
                onClick={handleUpdate}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Update Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
