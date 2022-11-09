import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => {
  return <div className={`bg-cardBg shadow-md ${className}`}>{children}</div>;
};
