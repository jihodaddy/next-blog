import { POSTS } from "@/lib/constant";
import { getBlogPosts } from "./blog/utils";
import { MetadataRoute } from "next";

export const baseUrl = 'https://next-blog-jiho.vercel.app';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = POSTS.map((route) => ({
    url: `${baseUrl}/${route.href}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...blogs, ...routes];
}