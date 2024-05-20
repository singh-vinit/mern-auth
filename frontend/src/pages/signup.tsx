import axios from "axios";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import { useState } from "react";
import { BACKEND_URL } from "../config";
const signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler() {
    axios.post(
      `${BACKEND_URL}/signup`,
      { firstName, lastName, username, password },
      { withCredentials: true }
    );
  }

  return (
    <Card>
      <Heading text="sign up" />
      <Subheading text="enter your information to create an account" />
      <InputBox
        title="firstName"
        field="text"
        value="vinit"
        setValue={setFirstName}
      />
      <InputBox
        title="lastName"
        field="text"
        value="singh"
        setValue={setLastName}
      />
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
      <Button text="sign in" handler={submitHandler} />
      <Bottom text="already have an account?" to="/signin" link="signin" />
    </Card>
  );
};

export default signup;
