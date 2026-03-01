import React from "react";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style/BlogDetails.css"

const BlogDetails = () => {
  const Navigate=useNavigate()
  const { id } = useParams();
  const { blogs,setBlogs } = useContext(BlogContext);
  const blog=blogs.find((b)=>b.id===Number(id))

  const handleDelete=()=>{
    const filteredBlog=blogs.filter(
      (b)=>b.id!==Number(id)
    )
    setBlogs(filteredBlog)
    Navigate("/")
  }
  return (
  <div className="details-wrapper">
  <div className="details-card">

    <div className="details-header">
      <h1 className="details-title">{blog.title}</h1>

      <div className="details-meta">
        <span>By Aman Vyas</span>
        <span>•</span>
        <span>{new Date(blog.date).toDateString()}</span>
        <span>•</span>
        <span className="reading-time">
          {Math.ceil(blog.content.split(" ").length / 200)} min read
        </span>
      </div>
    </div>

    <hr className="details-divider" />

    <div className="details-body">
      <p>{blog.content}</p>
    </div>

    <div className="details-actions">
      <Link to={`/edit/${blog.id}`} className="btn-edit">
        ✏ Edit
      </Link>

      <button onClick={handleDelete} className="btn-delete">
        🗑 Delete
      </button>
    </div>

  </div>
</div>
    
  );
};

export default BlogDetails;
