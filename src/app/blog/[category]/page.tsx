import * as React from 'react';
import { getBlogPosts } from '../utils';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import Link from 'next/link';
import CardCategory from '@/components/CardCategory';
import Header from '@/components/Header';

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    category: post.metadata.category,
  }))
}

export default function Page ({params}: {params: {category: string}}) {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );

  if (!posts.length) {
    notFound();
  }

  return (
    <>
    <Header>
      <Container>
        <h1 className='title font-semibold text-2xl tracking-wider mt-4 uppercase'>
          {posts[0]?.metadata.category}
        </h1>
      </Container>
    </Header>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          {posts
            .toSorted((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
