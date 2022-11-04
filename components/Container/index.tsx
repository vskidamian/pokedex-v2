import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Content = ({ children }: Props) => {
  return <div className="container mx-auto px-5">{children}</div>;
};
