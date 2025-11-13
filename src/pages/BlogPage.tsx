import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-8">
        <nav className="container-narrow">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-accent underline"
          >
            ← Back
          </Link>
        </nav>
      </header>

      <main className="py-8">
        <div className="container-narrow">
          <h1 className="text-2xl font-semibold mb-8">Writing</h1>
          <p className="text-sm text-muted-foreground">Coming soon</p>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
