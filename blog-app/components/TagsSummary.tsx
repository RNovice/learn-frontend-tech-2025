"use client";
import { PostMeta } from "@/types/post";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function getTagCounts(posts: { tags?: string[] }[]) {
  return posts.reduce((acc, post) => {
    post?.tags?.forEach((tag) => {
      acc[tag.toLowerCase()] = (acc[tag.toLowerCase()] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);
}

export default function TagsSummary({ posts }: { posts: PostMeta[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const tagCounts = getTagCounts(posts);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (selected) {
      params.set("tag", selected);
    } else {
      params.delete("tag");
    }
    router.push(`/blog?${params.toString()}`);
  }, [selected, router, searchParams]);

  useEffect(() => {
    const tag = searchParams.get("tag");
    if (tag) {
      setSelected(tag);
    } else {
      setSelected(null);
    }
  }, [searchParams]);

  return (
    <aside className="w-full md:w-64">
      <h3>Tags Summary</h3>
      <ul className="space-y-3">
        <li
          onClick={() => setSelected(null)}
          className={`flex justify-between cursor-pointer hover:font-bold ${selected === null ? "text-pink-600 font-bold" : ""}`}
        >
          <span className="text-[120%]">ALL POSTS</span>
          <span>{posts.length}</span>
        </li>
        {Object.entries(tagCounts).map(([tag, count]) => (
          <li key={tag}>
            <button
              onClick={() => setSelected(tag)}
              className={`pl-4 flex justify-between w-full text-left cursor-pointer uppercase hover:font-bold ${selected === tag ? "text-pink-600 font-bold" : ""
                }`}
            >
              <span>{tag}</span>
              <span>{count}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}