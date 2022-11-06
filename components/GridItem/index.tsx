import { ReactNode } from "react";

type GridItemProps = {
  children: ReactNode;
  size: number;
  className?: string;
};

export const GridItem = ({ size, children, className = "" }: GridItemProps) => {
  const basisSize = `basis-[${Math.round((100 / size) * 100) / 100}%]`;
  return <div className={`${basisSize} ${className}`}>{children}</div>;
};
