import TagsSummary from "@/components/TagsSummary";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { Fragment } from "react";

export default async function Blog({ searchParams }: { searchParams: { tag?: string } }) {
  const posts = await getAllPosts();
  const { tag } = await searchParams;
  const filteredPosts = tag ? posts.filter(post => post.tags.map(t => t.toLowerCase())?.includes(tag)) : posts;

  return (
    <main className="container mx-auto flex flex-col md:flex-row gap-6 p-12">
      <div className="flex-1">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, i) => (
            <Fragment key={post.slug}>
              {!!i && <hr className="mt-2 my-4 border-neutral-500" />}
              <div className="pt-3 pb-2">
                <span className="text-neutral-400">{post.date}</span>
                <h2 className="m-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-foreground no-underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <div className="space-x-3">
                  {post?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-sm uppercase text-pink-600 font-bold"
                    >
                      {tag.toLowerCase()}
                    </span>
                  ))}
                </div>
                <p className="text-neutral-500 my-2">{post.description}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-pink-600 no-underline"
                >
                  Read more →
                </Link>
              </div>
            </Fragment>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
      <TagsSummary posts={posts} />
    </main>
  );
}
