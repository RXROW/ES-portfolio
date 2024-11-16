import { personalData } from '@/utils/data/personal-data';
import React from 'react';

// Function to fetch individual blog details by slug
export async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }
  const data = await res.json();
  return data;
}

// Function to generate static paths for the [slug] route
export async function generateStaticParams() {
  // Replace this with logic to fetch the list of articles and extract slugs
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  if (!res.ok) {
    throw new Error("Failed to fetch slugs!");
  }
  const articles = await res.json();

  return articles.map((article) => ({
    slug: article.slug, // Ensure this matches the path segment name in your route
  }));
}

async function BlogDetails({ params }) {
  const { slug } = params; // Destructuring params to get slug
  let blog;

  try {
    blog = await getBlog(slug);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return <div>Error loading blog details.</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      {/* Add more blog details as needed */}
    </div>
  );
}

export default BlogDetails;
