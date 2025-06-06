import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <main className="container mx-auto p-12 flex flex-col items-center justify-center min-h-[calc(100vh-65px)]">
      <h1>Post Not Found</h1>
      <p className="mb-6">The post you are looking for does not exist.</p>
      <div className="flex gap-4">
        <Link href="/">
          <button className="btn-primary-outline">
            Return to Home
          </button>
        </Link>
        <Link href="/blog">
          <button className="btn-primary">
            Explore Other Posts
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;