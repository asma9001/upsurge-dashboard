import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import Messages from "./pages/Messages";
import Blogs from "./pages/Blogs";
import EditAbout from "./pages/EditAbout";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProperty from "./pages/AddProperty";
import MessageDetail from "./pages/MessageDetail";
import CreateBlogPost from "./pages/CreateBlogPost";
import EditBlog from "./pages/EditBlog";
import EditProperty from "./pages/EditProperty";
// ..
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/properties"
          element={
            <ProtectedRoute>
              <Properties />
            </ProtectedRoute>
          }
        />

        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />

        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <EditAbout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-property"
          element={
            <ProtectedRoute>
              <AddProperty />
            </ProtectedRoute>
          }
        />
        <Route
          path="/message-detail/:id"
          element={
            <ProtectedRoute>
              <MessageDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-blog"
          element={
            <ProtectedRoute>
              <CreateBlogPost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-blog/:id"
          element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          }
        />
         <Route
          path="/edit-property/:id"
          element={
            <ProtectedRoute>
              <EditProperty />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
