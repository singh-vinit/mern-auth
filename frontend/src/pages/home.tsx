import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbtn from "../components/Navbtn";
import Card from "../components/Card";
import Heading from "../components/Heading";
import { BACKEND_URL } from "../config";

interface Info {
  username: string;
  firstName: string;
  lastName: string;
}

const home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<Info>({
    username: "",
    firstName: "",
    lastName: "",
  });
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

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/profile`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUserInfo((prev) => ({
          ...prev,
          username: res.data.username,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="p-3 bg-cyan-100 flex justify-between items-center relative">
        <div className="text-xl font-bold">Home</div>
        <button
          className="border-2 border-black rounded-full w-10 h-10 font-bold capitalize"
          onClick={setWindow}
        >
          {userInfo.firstName[0]}
        </button>
        {isOpen ? (
          <div className="border border-black absolute right-1 top-16">
            <div className="hover:bg-gray-100 p-2 text-center">
              {userInfo.username}
            </div>
            <Navbtn btntext="profile" />
            <Navbtn btntext="logout" handler={logoutHandler} />
          </div>
        ) : null}
      </div>
      <Card>
        <Heading
          text={`congratulation! ${userInfo.firstName} you are authenticated`}
        />
      </Card>
    </div>
  );
};

export default home;
