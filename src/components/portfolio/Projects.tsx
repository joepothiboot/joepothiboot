export const Projects = () => {
  const projectItems = [
    {
      category: "Compiler education / LLVM internals",
      title: "LLVM Idioms Workbench",
      description:
        "A hands-on collection of LLVM-style idioms covering AST ownership, custom RTTI, and pass-manager-driven transformations. Each module makes a concrete compiler design choice visible through small, testable demos.",
      tags: "LLVM · C++ · AST · ownership",
    },
    {
      category: "MLIR / DSP compiler",
      title: "nano-dsp-mlir",
      description:
        "An out-of-tree MLIR dialect and lowering pipeline for DSP operators such as add, relu, matmul, and conv2d. The project focuses on concise dialect design, conversion to Linalg, and a lightweight optimization toolchain.",
      tags: "MLIR · DSP · lowering · optimization",
    },
    {
      category: "Schema tooling / MLIR",
      title: "json-schema-mlir",
      description:
        "A custom MLIR dialect for JSON Schema validation that canonicalizes constraints before lowering to standard dialects and eventually LLVM IR. It treats validation as a compiler optimization problem rather than a generic runtime walk.",
      tags: "MLIR · JSON Schema · validation · lowering",
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
