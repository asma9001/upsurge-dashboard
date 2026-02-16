import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { supabase } from "../config/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditBlog() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(state?.blog || null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Draft");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch blog if not passed via state
  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setStatus(blog.status);
      setPreview(blog.cover_image || null);
    } else {
      const fetchBlog = async () => {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          toast.error("Failed to fetch blog: " + error.message);
        } else {
          setBlog(data);
          setTitle(data.title);
          setContent(data.content);
          setStatus(data.status);
          setPreview(data.cover_image || null);
        }
      };
      fetchBlog();
    }
  }, [id, blog]);

  if (!blog) {
    return (
      <DashboardLayout>
        <p className="text-center mt-20 text-gray-500">Blog not found</p>
      </DashboardLayout>
    );
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpdate = async () => {
    setLoading(true);

    let imageUrl = blog.cover_image;

    // Upload new image if selected
    if (imageFile) {
      const fileName = `${Date.now()}_${imageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(fileName, imageFile);

      if (uploadError) {
        toast.error("Image upload failed: " + uploadError.message);
        setLoading(false);
        return;
      }

      const { publicURL } = supabase.storage.from("blog-images").getPublicUrl(fileName);
      imageUrl = publicURL;
    }

    // Update blog in Supabase
    const { error } = await supabase
      .from("blogs")
      .update({ title, content, status, cover_image: imageUrl })
      .eq("id", id);

    if (error) {
      toast.error("Update failed: " + error.message);
    } else {
      toast.success("Blog updated successfully!");
      setTimeout(() => navigate("/blogs"), 1500); // Navigate after toast
    }

    setLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <ArrowLeft onClick={() => navigate(-1)} className="w-5 h-5 text-gray-600 cursor-pointer" />
            <h1 className="text-xl font-bold text-gray-900">Edit Blog Post</h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
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

            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
              <label className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex items-center justify-center cursor-pointer relative overflow-hidden hover:bg-gray-50">
                {preview && <img src={preview} className="absolute inset-0 w-full h-full object-cover" />}
                {!preview && (
                  <div className="flex flex-col items-center text-gray-400">
                    <Upload className="w-5 h-5 mb-1" />
                    <span className="text-xs">Upload Image</span>
                  </div>
                )}
                <input type="file" hidden onChange={handleImageUpload} />
              </label>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Update Button */}
            <div className="flex justify-end">
              <button
                onClick={handleUpdate}
                disabled={loading}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update Blog"}
              </button>
            </div>
          </div>
        </div>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </DashboardLayout>
  );
}
