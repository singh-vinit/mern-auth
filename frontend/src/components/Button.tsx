type Props = {
  text: string;
  handler: () => void;
  loading: boolean;
};

const Button = ({ text, handler, loading }: Props) => {
  return (
    <button
      onClick={handler}
      className="w-full mt-4 p-1 rounded-md bg-black text-white text-lg font-semibold hover:bg-gray-900 flex justify-center items-center"
    >
      {loading ? (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 animate-spin"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 3V6M12 18V21M6 12H3M21 12H18M5.63672 5.63672L7.75977 7.75977M16.2422 16.2422L18.3633 18.3633M18.3652 5.63477L16.2441 7.75586M7.75781 16.2422L5.63477 18.3652"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ) : null}
      {text}
    </button>
  );
};

export default Button;
