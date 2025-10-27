import type { FC } from "react";

const Skills: FC = () => {
  const skillCategories = [
    {
      category: "Front-end",
      skills: [
        "ReactJS",
        "VueJS",
        "Next.js",
        "Vite",
        "HTML",
        "CSS",
        "TailwindCSS",
        "ChartJS",
      ],
    },
    {
      category: "Back-end",
      skills: ["Node.js", "MySQL", "MongoDB"],
    },
    {
      category: "State Management",
      skills: ["Redux-Saga", "TanStack", "Redux Toolkit", "Zustand"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "GitLab"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving",
        "Teamwork",
        "Communication",
        "Time Management",
        "Quick Learner",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-background rounded-lg border border-border"
            >
              <h3 className="text-lg font-bold text-primary mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
