type Props = {
  text: string;
};

const Subheading = ({ text }: Props) => {
  return <div className="text-lg text-gray-400 lowercase mt-2">{text}</div>;
};

export default Subheading;
