import { useState } from "react";
import Navbtn from "../components/Navbtn";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function setWindow() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  function logoutHandler() {
    axios
      .post(`${BACKEND_URL}/logout`)
      .then((res) => {
        console.log(res);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="p-3 bg-cyan-100 flex justify-between items-center relative">
      <div className="text-xl font-bold">Home</div>
      <button
        className="border border-black rounded-full w-10 h-10"
        onClick={setWindow}
      >
        U
      </button>
      {isOpen ? (
        <div className="border border-black absolute right-1 top-16">
          <div className="hover:bg-gray-100 p-2 text-center">username</div>
          <Navbtn btntext="profile" />
          <Navbtn btntext="logout" handler={logoutHandler} />
        </div>
      ) : null}
    </div>
  );
};

export default home;
