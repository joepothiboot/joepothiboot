import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site-header">
      <div className="container-narrow">
        <p className="site-kicker">Personal site / notes from the interface</p>
        <h1>Watcharapong (Joe) Pothiboot</h1>
        <p className="site-role">Frontend engineer and thoughtful builder.</p>
        <p className="site-intro">
          I build clear, resilient interfaces with React and TypeScript, and I
          enjoy working across product design, systems thinking, and compiler
          tooling.
        </p>
        <nav className="social-links" aria-label="Social links">
          <a href="mailto:joe.pothiboot.dev@gmail.com">Email</a>
          <a
            href="https://github.com/joepothiboot"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/joepotibutr"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
        <nav className="site-links" aria-label="Site links">
          <span>Additional links</span>
          <Link to="/">home</Link>
        </nav>
      </div>
    </header>
  );
};
