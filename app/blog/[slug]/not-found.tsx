import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        The blog post you're looking for doesn't exist or has been removed.
      </p>
      <Link 
        href="/blog" 
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
      >
        Browse All Posts
      </Link>
    </div>
  );
} 