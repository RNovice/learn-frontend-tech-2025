import { getAllPosts } from "@/lib/posts";

function getTagCounts(posts: { tags: string[] }[]) {
  return posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);
}

export default async function Blog() {
  const posts = await getAllPosts();

  const tagCounts = getTagCounts(posts);

  return (
    <main className="container mx-auto flex flex-col md:flex-row gap-6 p-12">
      <div className="flex-1">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.slug}
                className="p-4 mb-4 border border-gray-300 rounded shadow"
              >
                <h2>{post.title}</h2>
                <div className="mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 mr-2 text-sm text-white bg-blue-500 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
      <aside className="w-full md:w-64">
        <h3>Tags Summary</h3>
        <ul className="space-y-2">
          {Object.entries(tagCounts).map(([tag, count]) => (
            <li key={tag} className="flex justify-between">
              <span>{tag}</span>
              <span>{count}</span>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
