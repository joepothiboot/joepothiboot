export const Header = () => {
  return (
    <header className="site-header">
      <div className="container-narrow">
        <p className="site-kicker">Compilers, accelerators, formal verification</p>
        <h1>Watcharapong (Joe) Pothiboot</h1>
        <p className="site-role">
          Frontend engineer. Building compilers and proving them correct on
          the side.
        </p>
        <p className="site-intro">
          C++ and MLIR for the compilers, Haskell for the proofs. Main
          project is{" "}
          <a href="https://joepothiboot.github.io/compiler-research-lab/">
            compiler-research-lab
          </a>
          : pinned-commit writeups of a small tensor compiler, an
          accelerator simulator, and a browser-based IR viewer.
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
      </div>
    </header>
  );
};
