import type { FC } from "react";

const Experience: FC = () => {
  const experiences = [
    {
      title: "Front-end Developer",
      company: "Teqnological Asia",
      period: "1/2023 - Present",
      projects: [
        {
          name: "Insurance Details Showcase",
          description:
            "Created innovative features for showcasing insurance details with enhanced UX and optimized rendering.",
          tech: ["Next.js", "Redux Toolkit", "Axios"],
        },
        {
          name: "Loan Management CMS",
          description:
            "Built a comprehensive CMS to manage loan data with PDF contract generation and smooth animations.",
          tech: ["Vite", "TailwindCSS", "AntD", "Framer Motion"],
        },
        {
          name: "Employee Management System",
          description:
            "Developed system to view and manage employee information including attendance and remote work status.",
          tech: ["Next.js", "Redux-Saga", "AntD"],
        },
        {
          name: "GenAI Chatbot Platform",
          description:
            "Created landing page and chatbot with Google Meet integration and CI/CD setup.",
          tech: ["Vite", "Framer Motion", "Tailwind CSS"],
        },
        {
          name: "Financial Simulation Charts",
          description:
            "Developed financial simulation with dynamic charts based on investment asset performance.",
          tech: ["Vite", "TailwindCSS", "Zustand", "ChartJS"],
        },
        {
          name: "Japanese Government Data Visualization",
          description:
            "Created interactive charts displaying government information with dynamic filtering.",
          tech: ["Vite", "Echarts", "Redux", "SCSS"],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <p className="text-muted-foreground mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {exp.projects.map((project, pidx) => (
                  <div
                    key={pidx}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {project.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tidx) => (
                        <span
                          key={tidx}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
