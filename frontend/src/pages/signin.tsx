import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
const signin = () => {
  return (
    <Card>
      <Heading text="sign in" />
      <Subheading text="enter your credentials to access your account" />
      <InputBox title="username" field="text" value="vinit123@gmail.com" />
      <InputBox title="password" field="password" value="123456" />
      <Button text="sign in" />
      <Bottom text="don't have an account?" to="/signup" link="signup" />
    </Card>
  );
};

export default signin;
