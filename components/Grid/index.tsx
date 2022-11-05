import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  className?: string;
};

export const Grid = ({ children, className }: GridProps) => {
  console.log(children);
  return <div className={`flex flex-wrap ${className}`}>{children}</div>;
};
