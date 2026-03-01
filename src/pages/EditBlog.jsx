import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import '../style/EditBlog.css'

const EditBlog = () => {
  const { id } = useParams();
  const { blogs, setBlogs } = useContext(BlogContext);

  const blogToEdit = blogs.find((b) => b.id === Number(id));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const Navigate = useNavigate();

  useEffect(() => {
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setContent(blogToEdit.content);
    }
  }, [blogToEdit]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedBlog = blogs.map((blog) =>
      blog.id === Number(id) ? { ...blog, title, content } : blog,
    );
    setBlogs(updatedBlog);
    Navigate("/");
  };
  return (
    <div className="page-wrapper">
  <div className="form-card">
    <h2 className="form-title">Edit Blog</h2>

    <form onSubmit={handleUpdate} className="form">

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Update blog title"
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Update blog content"
        />
      </div>

      <div className="action-row">
        <button type="submit" className="btn-primary">
          💾 Save Changes
        </button>

        <button
          type="button"
          className="btn-secondary"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
      </div>

    </form>
  </div>
</div>
  );
};

export default EditBlog;
