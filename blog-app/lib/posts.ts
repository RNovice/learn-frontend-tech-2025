import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { PostMeta } from "@/types/post";

const postsDir = path.join(process.cwd(), "content/posts");

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return {
    meta: { ...data, slug } as PostMeta,
    content: compiledContent,
  };
}

export async function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data } = matter(source);
    return { ...data, slug } as PostMeta;
  });
}
