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
    return <div className="text-2xl text-center col-span-full mt-10">Loading blogs...</div>;
  }

  return (
    <div className="fixed sm:mx-40 bg-green-200 w-full h-full px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length === 0 ? (
          <p className="text-2xl text-center col-span-full">No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.blog_id}
              className="border border-neutral-700 p-2 w-96 h-66  rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <Link to={`/blogdetails/${blog.blog_id}`}>
                <img
                  src={blog.blog_image}
                  alt={blog.blog_title}
                  className="w-full h-52 rounded-md object-cover"
                />
                <div className="p-2">
                  <h3
                    className="text-lg font-semibold truncate"
                    title={blog.blog_title}
                  >
                    {blog.blog_title.length > 50
                      ? `${blog.blog_title.substring(0, 50)}...`
                      : blog.blog_title}
                  </h3>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>

  );
};

export default Blogs;
