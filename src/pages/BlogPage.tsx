import { Link } from "react-router-dom";
import { posts } from "@/components/portfolio/Blog";

const BlogPage = () => {
  return (
    <div className="site-shell">
      <header className="page-header">
        <div className="container-narrow">
          <Link to="/">← home</Link>
        </div>
      </header>

      <main>
        <div className="container-narrow">
          <p className="site-kicker">Notes, observations, and experiments</p>
          <h1 className="page-title">Writing</h1>
          <div className="post-list post-list-full">
            {posts.map((post) => (
              <article className="post-preview" key={post.title}>
                <p className="post-date">{post.date}</p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="read-note">Article in progress</span>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
