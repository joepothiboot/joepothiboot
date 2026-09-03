import { Link } from "react-router-dom";

export const posts = [
  {
    date: "18 Aug 2025",
    title: "The quiet power of a good loading state",
    excerpt: "Loading is part of the interface, not a gap between two screens. A few notes on making waiting feel understandable and intentional.",
  },
  {
    date: "02 Jul 2025",
    title: "Designing components for the edges",
    excerpt: "Reusable components become useful when they hold up under real content, awkward states, and the requirements nobody wrote down.",
  },
  {
    date: "11 May 2025",
    title: "What I look for in a frontend codebase",
    excerpt: "A practical checklist for finding the shape of a product quickly, from the first route to the smallest shared component.",
  },
];

export const Blog = () => {
  return (
    <section className="writing-section">
      <div className="container-narrow">
        <div className="section-heading">
          <h2>Writing</h2>
          <Link to="/writing">View all</Link>
        </div>
        <div className="post-list">
          {posts.map((post) => (
            <article className="post-preview" key={post.title}>
              <p className="post-date">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
