type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="w-full mt-4 p-1 rounded-md bg-black text-white text-lg font-semibold hover:bg-gray-900">
      {text}
    </button>
  );
};

export default Button;
