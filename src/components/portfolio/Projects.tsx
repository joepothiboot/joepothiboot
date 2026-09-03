export const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container-narrow">
        <div className="section-heading">
          <h2>Selected projects</h2>
          <span className="section-note">Research &amp; experiments</span>
        </div>
        <article className="project-item">
          <p className="post-date">Open source / compiler tooling</p>
          <h3>
            <a href="https://github.com/joepotibutr/vizmlir" target="_blank" rel="noopener noreferrer">
              VizMLIR
            </a>
          </h3>
          <p>
            An exploration of visualizing MLIR intermediate representations,
            making compiler transformations easier to inspect and understand.
          </p>
          <p className="project-tags">MLIR · compilers · visualization</p>
        </article>
      </div>
    </section>
  );
};