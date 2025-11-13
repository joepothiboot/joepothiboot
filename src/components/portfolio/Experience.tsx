const experiences = [
  {
    company: "Ingestro",
    location: "Hamburg, Germany (Remote)",
    role: "Frontend Engineer",
    period: "July 2025 - Present",
    achievements: [
      "Developed scalable React and TypeScript-based data ingestion tools, which were adopted by enterprise clients across Europe and the U.S.",
      "Developed and optimized over 40 reusable UX system components used by engineers across regions, ensuring consistency and performance.",
      "Partnered with product managers to enforce detailed, edge-cases suggestions, platform-consistent branding and UI/UX standards.",
      "Collaborated with Frontend, Backend, and QA teams to identify and resolve technical issues and bugs.",
    ],
  },
  {
    company: "ArcFusion",
    location: "Bangkok, Thailand (Hybrid)",
    role: "Frontend Software Engineer",
    period: "December 2024 - July 2025",
    achievements: [
      "Architected and developed various adapted AI products, including marketing insights, LLM evaluation tools, and note-taking platforms, using Next.js, TypeScript, Prisma, PostgreSQL, tRPC, React Query, and Zustand.",
      "Set up E2E test suites with Playwright, which improved product stability, facilitated easier experimentation with LLMs and prompts, and reduced backend test implementation time.",
      "Developed and fixed bugs on various backend servers using Go, Python and Node.js.",
    ],
  },
  {
    company: "Balloon One",
    location: "Brentford, United Kingdom (Remote)",
    role: "Serverless Frontend Developer",
    period: "December 2022 - October 2024",
    achievements: [
      "Developed a transport route optimization platform and successfully migrated customers with a 100% retention rate from the old platform, using Node.js, React, TypeScript, Redux, and NoSQL.",
      "Built over 20 interactive real-time data visualization widgets to track fleets, drivers, packages, and deliveries, resulting in a 200% increase in average user engagement time.",
      "Increased scalability of core features by refactoring, resulting in a ~50% reduction in development time for major tasks.",
      "Developed map visualizations to display and calculate route directions using REST API services, leveraging third-party map APIs.",
    ],
  },
  {
    company: "Vatic Thailand",
    location: "Thailand (On-site)",
    role: "Frontend Engineer",
    period: "March 2021 - November 2022",
    achievements: [
      "Designed and developed AdTech solutions using React, TypeScript, and Redux, enabling clients to research, create, manage, and monitor campaign performance.",
      "Initiated the setup and development of the UI design system, using Storybook, styled-components, styled-system, and Rollup.js.",
      "Set up end-to-end tests, integration tests, and unit tests for the local environment using Jest, Cypress, and Testing Library.",
      "Evaluated UX with designers for technical feasibility, ensuring alignment with project goals and technical capabilities.",
      "Mentored junior team members in React and documentation best practices.",
    ],
  },
  {
    company: "ScreenCloud",
    location: "Bangkok, Thailand (On-site)",
    role: "Junior Software Developer",
    period: "July 2018 - July 2019",
    achievements: [
      "Developed a media preview studio for digital signage, empowering users to upload and schedule content prior to publication using React, TypeScript, and GraphQL Apollo.",
      "Worked in initial phases of core feature development, significantly improving stability and increasing strong type checks from ~50% to ~90%.",
      "Worked on the expansion and optimization of 50+ UX components used by 10+ engineers, enhancing accessibility standards and promoting code scalability across a diverse range of projects.",
    ],
  },
];

export const Experience = () => {
  const recentExperience = experiences[0];

  return (
    <section className="mb-16">
      <div className="container-narrow">
        <p className="text-sm text-muted-foreground mb-1">Currently</p>
        <p className="text-base">
          {recentExperience.role} at {recentExperience.company}
        </p>
      </div>
    </section>
  );
};
