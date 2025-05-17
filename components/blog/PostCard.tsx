import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Post } from "@/lib/outstatic";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>
          {formatDate(post.publishedAt)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center space-x-2">
          {post.author?.picture && (
            <Image
              src={post.author.picture}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          <span className="text-xs text-muted-foreground">
            {post.author?.name}
          </span>
        </div>
        <Link 
          href={`/blog/${post.slug}`} 
          className="text-xs font-medium hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
} 