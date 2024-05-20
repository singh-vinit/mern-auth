type Props = {
  text: string;
  handler: () => void;
};

const Button = ({ text, handler }: Props) => {
  return (
    <button
      onClick={handler}
      className="w-full mt-4 p-1 rounded-md bg-black text-white text-lg font-semibold hover:bg-gray-900"
    >
      {text}
    </button>
  );
};

export default Button;
