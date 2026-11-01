export const Projects = () => {
  const projectItems = [
    {
      category: "MLIR / tensor compiler",
      title: "nano-dsp-mlir",
      description:
        "A small tensor compiler. A dsp dialect lowers to linalg.generic and on to LLVM, tiled and vectorized by a Transform-dialect schedule, then checked bit for bit against unscheduled code and a C++ reference.",
      tags: "MLIR · LLVM · Mojo · C++",
    },
    {
      category: "Accelerator modeling",
      title: "mock-npu-bench",
      description:
        "A cycle-level simulator for a fictional vector accelerator: in-order core, vector unit, scratchpad, and asynchronous DMA, with an assembler and performance profiles.",
      tags: "simulation · ISA design · performance",
    },
    {
      category: "Compiler tooling",
      title: "vizmlir",
      description:
        "A browser tool for reading mlir-opt pass traces: structural diffs per pass, GPU launch-to-warp mapping, and load/store classification down to PTX. A Rust parser compiled to WebAssembly, no backend.",
      tags: "MLIR · Rust · WASM · GPU",
    },
  ];

  return (
    <section className="projects-section">
      <div className="container-narrow">
        <div className="section-heading">
          <h2>Selected projects</h2>
          <span className="section-note">Research &amp; experiments</span>
        </div>
        {projectItems.map((project) => (
          <article className="project-item" key={project.title}>
            <p className="post-date">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-tags">{project.tags}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
