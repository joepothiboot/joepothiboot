const skillCategories = [
  {
    category: "Languages & Core",
    skills: ["TypeScript", "JavaScript", "Go", "Python", "HTML/CSS"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Redux", "React Query", "Zustand"],
  },
  {
    category: "Backend & Database",
    skills: [
      "Node.js",
      "GraphQL",
      "tRPC",
      "Prisma",
      "MySQL",
      "PostgreSQL",
      "NoSQL",
      "Firebase",
    ],
  },
  {
    category: "Build & Testing",
    skills: [
      "Vite",
      "Webpack",
      "Rollup",
      "Babel",
      "Jest",
      "Playwright",
      "Cypress",
      "Testing-Library",
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      "Docker",
      "Amazon Web Services",
      "Google Cloud Platform",
      "CI/CD",
      "Linux",
    ],
  },
];

export const Skills = () => {
  return (
    <section className="mb-16">
      <div className="container-narrow">
        <h2 className="text-base font-semibold mb-6">Skills</h2>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold mb-2">
                {category.category}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
