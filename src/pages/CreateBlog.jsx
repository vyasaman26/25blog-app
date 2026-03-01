import React, { useContext } from 'react'
import { useState } from 'react'
import { BlogContext } from '../context/BlogContext'
import { Navigate, useNavigate } from 'react-router-dom'
import '../style/CreateBlog.css'

const CreateBlog = () => {
  const {blogs,setBlogs}=useContext(BlogContext)
  const nevigate=useNavigate()
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newBlog={
      id:Date.now(),
      title,
      content,
    };
    setBlogs([...blogs,newBlog]);
    nevigate("/")
  }
  return (
  <div className="page-wrapper">
  <div className="form-card">
    <h2 className="form-title">Create New Blog</h2>

    <form onSubmit={handleSubmit} className="form">
      
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className="btn-primary full-btn" type="submit">
        Publish Blog
      </button>

    </form>
  </div>
</div>
  )
}

export default CreateBlog
