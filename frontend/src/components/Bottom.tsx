import { Link } from "react-router-dom";

type Props = {
  text: string;
  to: string;
  link: string;
};

const Bottom = ({ text, to, link }: Props) => {
  console.log(to);
  return (
    <div className="text-sm font-semibold lowercase m-4">
      {text}
      <Link to={to} className="hover:underline pl-1">
        {link}
      </Link>
    </div>
  );
};

export default Bottom;
