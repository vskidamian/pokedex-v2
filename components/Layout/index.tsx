import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Content = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen bg-background block">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Content;
