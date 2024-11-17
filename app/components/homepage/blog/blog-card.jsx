"use client";
import Image from "next/image";
import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";
import { ConvertDate } from "../../../../utils/ConvertDate";

function BlogCard({ 
  blog = {
    title: "Default Blog Title",
    image: "/path/to/default-image.jpg",
    description: "This is a default description for the blog card.",
    date: new Date().toISOString(),
    comments_count: 0,
  } 
}) {
  return (
    <div className="border border-[#1b293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e]/20 rounded-md relative">
      <div className="overflow-hidden h-96 rounded-t-md">
        <Image
          src={blog.image}
          alt={blog.title || "Blog Image"}
          width={600}
          height={400}
          className="h-full w-full hover:scale-110 transition-all duration-300 object-cover"
        />
      </div>
      <div className="px-4 mt-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">
          {ConvertDate(blog.date)}
        </h3>
        <div className="flex items-center gap-3 text-white">
          <p className="flex items-center gap-1">
            <BsHeartFill />
            <span>{blog.comments_count}</span>
          </p>
          {blog.comments_count > 0 && (
            <p className="flex items-center gap-1">
              <FaCommentAlt />
              <span>{blog.comments_count}</span>
            </p>
          )}
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
        <p className="text-sm text-gray-400">{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
