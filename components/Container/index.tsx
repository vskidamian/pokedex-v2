import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return <div className={`container mx-auto px-5 ${className}`}>{children}</div>;
};
