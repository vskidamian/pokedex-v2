import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  className?: string;
  space?: 1 | 2 | 3 | 4;
};

export const Grid = ({ space, children, className = "" }: GridProps) => {
  const spacing = {
    1: `mt-[8px] w-[calc(100%+8px)] ml-[-8px] [&>*]:pt-[8px] [&>*]:pl-[8px]`,
    2: `mt-[16px] w-[calc(100%+16px)] ml-[-16px] [&>*]:pt-[16px] [&>*]:pl-[16px]`,
    3: `mt-[24px] w-[calc(100%+24px)] ml-[-24px] [&>*]:pt-[24px] [&>*]:pl-[24px]`,
    4: `mt-[32px] w-[calc(100%+328px)] ml-[-32px] [&>*]:pt-[32px] [&>*]:pl-[32px]`,
  };

  return <div className={`flex flex-wrap ${space ? spacing[space] : ""} ${className}`}>{children}</div>;
};
