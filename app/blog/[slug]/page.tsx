import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/outstatic";
import { formatDate } from "@/lib/utils";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width:
                post.coverImage && post.coverImage.includes("og_")
                  ? 1200
                  : 800,
              height:
                post.coverImage && post.coverImage.includes("og_") ? 630 : 450,
              alt: post.title,
            },
          ]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const fetchCache = 'default-cache';

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12">
      <Link href="/blog" className="text-sm text-muted-foreground hover:underline mb-8 inline-block">
        ← Back to blog
      </Link>
      
      <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
        {post.coverImage && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center mb-6">
          <div className="flex items-center space-x-2">
            {post.author?.picture && (
              <Image
                src={post.author.picture}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div>
              <p className="text-sm font-medium">{post.author?.name}</p>
              <p className="text-xs text-muted-foreground">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </div>
        </div>
        
        <div 
          className="prose prose-lg dark:prose-invert" 
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
} 