import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      publishedTime: new Date(post.meta.date).toISOString(),
      authors: [post.meta.author],
    },
    keywords: post.meta.keywords,
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="container mx-auto p-12">
      <article >
        <h1 className="mb-1">{post.meta.title}</h1>
        <p className="mb-1 text-sm text-gray-500 text-end">Author: {post.meta.author} &nbsp; Date: {post.meta.date}</p>
        <hr className="mb-6" />
        <div className="mdx">{post.content}</div>
      </article>
    </main>
  );
}
