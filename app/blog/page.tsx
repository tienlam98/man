import { Metadata } from "next";
import { getAllPosts } from "@/lib/outstatic";
import PostCard from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: "Blog - Manly Wisdom",
  description: "Read our latest blog posts about manly wisdom and insights.",
};

export const fetchCache = 'default-cache';

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  // Resolve searchParams to support async APIs
  await searchParams;
  
  const posts = await getAllPosts();
  
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">No posts found</h2>
          <p className="text-muted-foreground">
            Please create posts using the Outstatic CMS.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
} 