import React from "react";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style/BlogDetails.css";
import { AuthContext } from "../context/AuthContext";

const BlogDetails = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { blogs, setBlogs } = useContext(BlogContext);
  const blog = blogs.find((b) => b.id === Number(id));
  const { user, token } = useContext(AuthContext);

  const handleDelete = () => {
    const filteredBlog = blogs.filter((b) => b.id !== Number(id));
    setBlogs(filteredBlog);
    Navigate("/");
  };
  return (
    <div className="details-wrapper">
      <div className="details-card">
        <div className="details-header">
          <h1 className="details-title">{blog.title}</h1>

          <div className="details-meta">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{new Date(blog.date).toDateString()}</span>
            <span>•</span>
            <span className="reading-time">min read</span>
          </div>
        </div>

        <hr className="details-divider" />

        <div className="details-body">
          <p>{blog.content}</p>
        </div>
        {token && user.username === blog.author && (
          <div className="details-actions">
            <Link to={`/edit/${blog.id}`} className="btn-edit">
              Edit
            </Link>

            <button onClick={handleDelete} className="btn-delete">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
