import { ReactNode } from "react";

type GridItemProps = {
  children: ReactNode;
  size: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const basisSizes = {
  1: "basis-[100%]",
  2: "basis-[50%]",
  3: "basis-[33.33%]",
  4: "basis-[25%]",
  5: "basis-[20%]",
  6: "basis-[16.66%]",
};

export const GridItem = ({ size, children, className = "" }: GridItemProps) => {
  return <div className={`${basisSizes[size]} ${className}`}>{children}</div>;
};
