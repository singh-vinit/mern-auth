import { ReactNode } from "react";

type Props = { children: ReactNode };

const Card = ({ children }: Props) => {
  return (
    <div className="border border-black mt-8 mx-auto max-w-sm rounded-md p-4 ">
      {children}
    </div>
  );
};

export default Card;
