type Props = {
  title: string;
  field: string;
  value: string;
  setValue: (value: string) => void;
};

const InputBox = ({ title, field, value, setValue }: Props) => {
  return (
    <div>
      <p className="text-lg font-semibold mb-1 mt-2">{title}</p>
      <input
        type={field}
        className="border border-gray-400 rounded-md w-full p-1 focus:placeholder:opacity-0"
        placeholder={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
