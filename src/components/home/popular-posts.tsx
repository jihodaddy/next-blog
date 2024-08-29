'use client'

import { popularPosts } from "@/lib/placeholder-data";
import { Icons } from "../icons";
import Link from "next/link";
import useSWR from "swr";
import { fetcher, fetchUrl } from "@/lib/utils";
import PopularPostsSkeleton from "../skeleton/popular-posts-skeleton";

export default function PopularPosts() {
  const {data, error, isLoading} = useSWR(fetchUrl, fetcher);

  if (error) return <div>Failed to load</div>
  if (isLoading) return <PopularPostsSkeleton />

  return (
    <ul className="overflow-auto">
      {data?.map((post: {category: string, title: string, slug: string}) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li className='flex items-center gap-2 group cursor-pointer py-2'>
            <Icons.ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-none" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}