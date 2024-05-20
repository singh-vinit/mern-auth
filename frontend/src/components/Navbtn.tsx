type Props = {
  btntext: string;
  handler?: () => void;
};

const Navbtn = ({ btntext, handler }: Props) => {
  return (
    <div>
      <button className="hover:bg-gray-100 p-2 text-center w-full" onClick={handler}>
        {btntext}
      </button>
    </div>
  );
};

export default Navbtn;
