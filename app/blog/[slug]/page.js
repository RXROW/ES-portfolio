// @flow strict
import { personalData } from "@/utils/data/personal-data";

// Function to fetch individual blog details by slug
async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

// Function to generate static paths for the [slug] route
export async function generateStaticParams() {
  // Fetch a list of articles to extract slugs
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  if (!res.ok) {
    throw new Error('Failed to fetch slugs');
  }
  const articles = await res.json();

  // Map over the articles to create params objects with slugs
  return articles.map(article => ({
    slug: article.slug, // Ensure this matches the dynamic path segment
  }));
}

async function BlogDetails({ params }) {
  const { slug } = params; // Destructure params to get the slug
  let blog;

  try {
    blog = await getBlog(slug);
  } catch (error) {
    console.error('Error fetching blog:', error);
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
