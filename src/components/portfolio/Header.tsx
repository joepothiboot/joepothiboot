import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-8">
      <nav className="container-narrow">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-16 h-16 rounded-full bg-secondary flex-shrink-0" />
          <div>
            <h1 className="text-xl font-semibold mb-1">
              Watcharapong (Joe) Pothiboot
            </h1>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <a
            href="mailto:joe.pothiboot.dev@gmail.com"
            className="text-foreground hover:text-accent underline"
          >
            Email
          </a>
          <a
            href="https://github.com/joepotibutr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/joepotibutr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent underline"
          >
            LinkedIn
          </a>
          <Link
            to="/writing"
            className="text-foreground hover:text-accent underline"
          >
            Writing
          </Link>
        </div>
      </nav>
    </header>
  );
};
