export default function Home() {
  return (
    <main>
      <header className="w-full text-center bg-gradient-to-b from-background to-300% to-neutral-500 p-12">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-6xl mb-4">Welcome to NextGen Blog</h1>
          <p className="mb-4">Your go-to platform for cutting-edge software tech insights and articles.</p>
          <a href="/blog">
            <button className="bg-foreground hover:bg-foreground/90 text-background px-4 py-2 mt-4 rounded">
              Explore Blogs
            </button>
          </a>
        </div>
      </header>
      <div className="container mx-auto px-12">
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <article>
                <a className="text-xl font-semibold text-foreground hover:text-foreground/90" href="/blog/1">
                  The Future of AI in Software Development
                </a>
                <p className="text-sm text-gray-400">Explore how AI is shaping the software industry.</p>
              </article>
            </li>
            <li className="mb-2">
              <article>
                <a className="text-xl font-semibold text-foreground hover:text-foreground/90" href="/blog/2">
                  Top 10 JavaScript Frameworks in 2025
                </a>
                <p className="text-sm text-gray-400">Discover the most popular frameworks for modern web development.</p>
              </article>
            </li>
            <li className="mb-2">
              <article>
                <a className="text-xl font-semibold text-foreground hover:text-foreground/90" href="/blog/3">
                  How to Build Scalable Web Applications
                </a>
                <p className="text-sm text-gray-400">Learn best practices for creating scalable apps.</p>
              </article>
            </li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-4">Connect with like-minded developers and share your knowledge.</p>
          <button className="bg-foreground hover:bg-foreground/90 text-background px-4 py-2 rounded">
            Sign Up Now
          </button>
        </section>
      </div>
    </main>
  );
}
