
import BlogCard from "../components/homepage/blog/blog-card";
import Image from "next/image";

// async function getBlogs() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();
//   return data;
// };



function page() {
  const blogs = [
    {
      title: "Understanding JavaScript Closures",
      description: "A deep dive into closures, one of JavaScript's most powerful features.",
      image: "https://res.cloudinary.com/dyv3dluov/image/upload/v1723862700/mongodb_cours_cc597221ce.jpg",
      date: "2024-11-01T10:00:00Z",
      comments_count: 12,
      hearts_count: 150,
    },
    {
      title: "Getting Started with React Hooks",
      description: "Learn how to leverage hooks to write cleaner, functional React components.",
      image: "https://res.cloudinary.com/dyv3dluov/image/upload/v1723861849/thumbnail_next_js_b471d2b8b7.png",
      date: "2024-10-25T08:30:00Z",
      comments_count: 30,
      hearts_count: 200,
    },
    {
      title: "Exploring the Latest in Next.js 15",
      description: "A look at the new features and improvements in Next.js 15 for developers.",
      image: "https://res.cloudinary.com/dyv3dluov/image/upload/v1723862133/js_7ac4753a71.jpg",
      date: "2024-09-20T15:45:00Z",
      comments_count: 5,
      hearts_count: 80,
    },
  ];


  return (
    <div id="education" className="relative border-t my-12 border-[#25213b] py-16">
      {/* Background Image */}
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1570}
        height={790}
        className="absolute top-0 -z-10 w-full"
      />

      {/* Title */}
      <h2 className="text-pink-500 text-sm mb-12 flex justify-center uppercase tracking-widest">
        [ All BLogs ]
      </h2>
      {/* Main Content */}
      <div className="flex justify-center my-10">
        <div className="w-3/4">
          {/* Divider Line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (

            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;