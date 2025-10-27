import type { FC } from "react";

interface PropsType {
  title: string;
}

const TitleHeader: FC<PropsType> = ({ title }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
      {title}
    </h2>
  );
};

export default TitleHeader;
