type Props = {
  text: string;
};
const Heading = ({ text }:Props) => {
  return <div className="text-3xl text-black font-bold capitalize">{text}</div>;
};

export default Heading;
