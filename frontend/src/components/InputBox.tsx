type Props = {
  title: string;
  field: any;
};

const InputBox = ({ title, field }: Props) => {
  return (
    <div>
      <p className="text-lg font-semibold mb-1 mt-2">{title}</p>
      <input
        type={field}
        className="border border-gray-400 rounded-md w-full"
      />
    </div>
  );
};

export default InputBox;
