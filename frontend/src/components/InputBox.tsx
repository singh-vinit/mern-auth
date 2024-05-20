type Props = {
  title: string;
  field: string;
  value: string;
};

const InputBox = ({ title, field, value }: Props) => {
  return (
    <div>
      <p className="text-lg font-semibold mb-1 mt-2">{title}</p>
      <input
        type={field}
        className="border border-gray-400 rounded-md w-full p-1 focus:placeholder:opacity-0"
        placeholder={value}
      />
    </div>
  );
};

export default InputBox;
