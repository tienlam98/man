import { load } from 'outstatic/server';

// Add fetchCache directive for Next.js 15 data caching
export const fetchCache = 'force-cache';

// Types for our content
export type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
  coverImage: string;
  content: string;
  author: {
    name: string;
    picture: string;
  };
};

// Initialize Outstatic
let outstatic: Awaited<ReturnType<typeof load>>;

export async function getOutstatic() {
  if (!outstatic) {
    try {
      outstatic = await load();
    } catch (error) {
      // Handle case where metadata file doesn't exist yet
      console.warn('Outstatic metadata not found, returning empty data');
      // Create a fallback that matches the expected DB structure
      return {
        find: () => ({
          project: () => ({
            toArray: () => [],
            first: () => null
          }),
          toArray: () => [],
          first: () => null
        })
      };
    }
  }
  return outstatic;
}

// Get all posts with caching enabled
export async function getAllPosts(): Promise<Post[]> {
  try {
    const db = await getOutstatic();
    
    // Using the find method from Outstatic v2
    const posts = await db
      .find({ collection: 'posts' })
      .project([
        'title',
        'publishedAt',
        'description',
        'slug',
        'coverImage',
        'author',
      ])
      .toArray();
    
    return posts as Post[];
  } catch (error) {
    console.warn('Error fetching posts:', error);
    return [];
  }
}

// Get a post by slug with caching enabled
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const db = await getOutstatic();
    
    // Using the find method to get a document by slug
    const post = await db
      .find({
        collection: 'posts',
        slug: slug
      })
      .project([
        'title',
        'publishedAt',
        'description',
        'slug',
        'coverImage',
        'content',
        'author',
      ])
      .first();

    return post as Post || null;
  } catch (error) {
    console.warn('Error fetching post by slug:', error);
    return null;
  }
} 