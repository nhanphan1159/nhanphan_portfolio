import type { FC } from "react";

import TitleHeader from "@src/components/Title";

const About: FC = () => {
  const RenderInfo: FC<{
    title: string;
    titleSub?: string;
    content?: string;
  }> = ({ title, titleSub = "", content = "" }) => {
    return (
      <div className="p-6 bg-background rounded-lg border border-border">
        <h3 className="text-primary font-semibold mb-2">{title}</h3>
        {titleSub && <p className="text-muted-foreground">{titleSub}</p>}
        {content && <p className="text-sm text-muted-foreground">{content}</p>}
      </div>
    );
  };

  const InfoDataDetails: FC<{ text: string }> = ({ text }) => {
    return (
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        {text}
      </p>
    );
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <TitleHeader title="About Me" />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <InfoDataDetails
              text="I'm a Front End Developer with a passion for building scalable,
              user-centered web applications. With expertise in modern React and
              Next.js ecosystems, I focus on creating smooth, interactive
              experiences that users love."
            />
            <InfoDataDetails
              text="My journey in web development has equipped me with strong
              problem-solving skills, a collaborative mindset, and the ability
              to quickly adapt to new technologies. I'm committed to continuous
              learning and staying updated with the latest industry trends."
            />
          </div>
          <div className="space-y-6">
            <RenderInfo
              title="Location"
              content="Gop Vap, Ho Chi Minh City, Vietnam"
            />
            <RenderInfo
              title="Contact"
              titleSub="0383283926"
              content="nhanphan1159@gmail.com"
            />
            <RenderInfo
              title="Education"
              titleSub="HUTECH University"
              content="Information Technology (2018-2022)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
