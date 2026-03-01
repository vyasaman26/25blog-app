import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
export const BlogContext = createContext();
const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(() => {
    const savedBlog = localStorage.getItem("blogs");
    return savedBlog
      ? JSON.parse(savedBlog)
      : [
          {
            id: 1,
            title: "Understanding React Hooks",
            content:
              "React Hooks allow you to use state and lifecycle features in functional components. Hooks like useState, useEffect, and useContext simplify logic and make components cleaner and more reusable.",
          },
          {
            id: 2,
            title: "JavaScript Array Methods Explained",
            content:
              "JavaScript provides powerful array methods such as map, filter, reduce, and find. These methods help manipulate and transform data efficiently without mutating the original array.",
          },
          {
            id: 3,
            title: "Building a CRUD App with React",
            content:
              "A CRUD application allows users to Create, Read, Update, and Delete data. Using React with Context API and localStorage makes it easy to build lightweight client-side CRUD apps.",
          },
          {
            id: 4,
            title: "What is useEffect in React?",
            content:
              "The useEffect hook lets you perform side effects in functional components. It runs after render and can depend on specific variables using the dependency array.",
          },
          {
            id: 5,
            title: "Difference Between == and === in JavaScript",
            content:
              "The == operator performs type coercion before comparison, while === checks both value and type strictly. It is recommended to always use strict equality in modern JavaScript applications.",
          },
          {
            id: 6,
            title: "Optimizing Performance with useMemo",
            content:
              "useMemo helps optimize performance by memoizing expensive calculations. It recomputes values only when dependencies change, preventing unnecessary re-renders.",
          },
          {
            id: 7,
            title: "Introduction to Client-Side Routing",
            content:
              "Client-side routing allows navigation between pages without full page reload. React Router is commonly used to implement routing in React applications.",
          },
        ];
  });
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  return (
    <div>
      <BlogContext.Provider value={{ blogs, setBlogs }}>
        {children}
      </BlogContext.Provider>
    </div>
  );
};

export default BlogProvider;
