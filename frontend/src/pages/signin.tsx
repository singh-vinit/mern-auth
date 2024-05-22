import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  function submitHandler() {
    setIsLoading(true);
    axios
      .post(
        `${BACKEND_URL}/signin`,
        { username, password },
        { withCredentials: true }
      )
      .then((res) => {
        setIsLoading(false);
        toast(res.data.message);
        navigate("/home");
      })
      .catch((err) => {
        setIsLoading(false);
        toast(err.response.data.message);
      });
  }
  return (
    <Card>
      <Heading text="sign in" />
      <Subheading text="enter your credentials to access your account" />
      <InputBox
        title="username"
        field="email"
        value="vinit123@gmail.com"
        setValue={setUsername}
      />
      <InputBox
        title="password"
        field="password"
        value="123456"
        setValue={setPassword}
      />
      <Button text="sign in" handler={submitHandler} loading={isLoading} />
      <Bottom text="don't have an account?" to="/signup" link="signup" />
    </Card>
  );
};

export default signin;
