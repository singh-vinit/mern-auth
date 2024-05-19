type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="w-full mt-3 rounded-md bg-black text-white text-lg">{text}</button>
  );
};

export default Button;
