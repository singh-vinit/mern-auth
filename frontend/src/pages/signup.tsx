import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

const signup = () => {
  return (
    <Card>
      <Heading text="sign up" />
      <Subheading text="enter your information to create an account" />
      <InputBox title="firstName" field="text" value="vinit" />
      <InputBox title="lastName" field="text" value="singh" />
      <InputBox title="username" field="text" value="vinit123@gmail.com" />
      <InputBox title="password" field="password" value="123456" />
      <Button text="sign in" />
      <Bottom text="already have an account?" to="/signin" link="signin" />
    </Card>
  );
};

export default signup;
