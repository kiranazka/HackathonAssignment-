import React from "react";
import {  FaCalendarAlt ,FaPen } from "react-icons/fa"; 
import Image from "next/image";
const Blog: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: "The Latest in Web Development",
      imgSrc: "/Image/Frame 3.png", 
      author: "John Doe",
      date: "January 1, 2024",
      excerpt: "Top trends and technologies in web development in 2024.",
    },
    {
      id: 2,
      title: "Understanding React 18 Features",
      imgSrc: "/Image/Frame 1.png",
      author: "Jane Smith",
      date: "February 10, 2024",
      excerpt: "A deep dive into the new features of React 18 and how to use them.",
    },
    {
      id: 3,
      title: "How AI is Changing Front-End Development",
      imgSrc:"/Image/Frame 4.png", 
      author: "Alice Johnson",
      date: "March 15, 2024",
      excerpt: "Exploring the impact of AI on front-end frameworks and tools.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#151875] mb-8">Leatest Blog</h2>
        

        {/* Blog Cards */}
        <h2 className="text-3xl font-bold text-[#151875] mb-8">Leatest Blog</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-80 bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48">
                <Image
                  src={blog.imgSrc}
                  alt={blog.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Info */}
              <div className="p-4">
                <div className="flex items-center justify-start space-x-4 text-gray-600">
                  <div className="flex text-xs items-center  space-x-1">
                    <span className="text-[#FB2E86]">
                    <FaPen />
                    </span>
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex text-xs items-center space-x-1">
                  <span className="text-[#FFA454]">
                    <FaCalendarAlt />
                    </span>
                    <span>{blog.date}</span>
                  </div>
                </div>
                <div className=" py-2 text-start">
                <h3 className="text-md font-semibold text-[#151875]">{blog.title}</h3>
                <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="text-start px-5">
                <a
                  href="#"
                  className="text-[#7E33E0] hover:underline text-sm font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;