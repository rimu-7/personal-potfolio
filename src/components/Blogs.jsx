import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://personal-blog-upload.vercel.app/api/blogs"
        );
        console.log("Fetched blogs:", response.data);

        // Sort blogs by date (newest first) or by ID as fallback
        const sortedBlogs = response.data.sort((a, b) => {
          if (a.created_at && b.created_at) {
            return new Date(b.created_at) - new Date(a.created_at);
          } else {
            return b.blog_id - a.blog_id; // Fallback to sorting by ID
          }
        });

        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className=" text-center mt-10">Loading blogs...</div>;
  }

  return (
    <div className="">
     
      <div className=" flex  flex-col h-full mx-auto">
        <div className="flex-grow ">
          <div className="flex flex-col mx-auto w-80 gap-4 ">
            {blogs.length === 0 ? (
              <p className=" text-6xl flex justify-center items-center text-center">No blogs available.</p>
            ) : (
              blogs.map((blog) => (
                <Link
                  to={`/blogdetails/${blog.blog_id}`}
                  key={blog.blog_id}
                  className="border border-neutral-700 p-2 rounded-lg cursor-pointer"
                >
                  <img
                    src={blog.blog_image}
                    alt={blog.blog_title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3
                    className="text-lg font-semibold mt-2"
                    title={blog.blog_title}
                  >
                    {blog.blog_title.length > 50
                      ? `${blog.blog_title.substring(0, 50)}...`
                      : blog.blog_title}
                  </h3>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Blogs;