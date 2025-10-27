import type { FC } from "react";

const Education: FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-card rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              HUTECH University
            </h3>
            <p className="text-primary font-semibold mb-2">
              Information Technology
            </p>
            <p className="text-muted-foreground mb-4">
              Major: Software Technology
            </p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-accent">
                GPA: 3.07/4.0
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              August 2018 - September 2022
            </p>
          </div>

          <div className="p-8 bg-card rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">Agile Scrum Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
