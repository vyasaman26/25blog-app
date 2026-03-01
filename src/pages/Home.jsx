import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import "../style/Home.css";

function Home() {
  const { blogs } = useContext(BlogContext);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlog = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [blogs, searchQuery]);

  return (
    <div className="container">
      <div className="minimal-hero">
        <h1>BlogSpace</h1>
        <p>Thoughts, ideas and learnings — simply written.</p>
      </div>
      
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="blog-grid">
        {filteredBlog.length > 0 ? (
          filteredBlog.map((blog) => (
            <div key={blog.id} className="blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.content.substring(0, 80)}...</p>
              <Link to={`/blog/${blog.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <h3>No Blogs Found</h3>
            <p>Try adjusting your search or create a new blog.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
