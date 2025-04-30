
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to manage state and effects in your applications.",
      date: "2025-03-15T12:00:00Z",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "React",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS.",
      date: "2025-02-20T12:00:00Z",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      category: "CSS",
      readTime: "4 min read",
    },
    {
      id: "3",
      title: "The Power of TypeScript in Modern Web Development",
      excerpt: "Why TypeScript is becoming essential for building maintainable JavaScript applications.",
      date: "2025-01-10T12:00:00Z",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "TypeScript",
      readTime: "7 min read",
    },
    {
      id: "4",
      title: "Optimizing React Application Performance",
      excerpt: "Advanced techniques to improve the performance of your React applications.",
      date: "2024-12-05T12:00:00Z",
      imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
      category: "Performance",
      readTime: "6 min read",
    },
    {
      id: "5",
      title: "Introduction to GraphQL with Apollo Client",
      excerpt: "Learn the basics of GraphQL and how to use Apollo Client with React.",
      date: "2024-11-22T12:00:00Z",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "GraphQL",
      readTime: "8 min read",
    }
  ];

  return (
    <div className="page-container">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Thoughts, tutorials, and insights on web development and design.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
