import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Content = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen bg-red-700">
        <main>{children}</main>
      </div>
    </>
  );
};
