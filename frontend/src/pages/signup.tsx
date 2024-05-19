import Button from "../components/Button";
import Card from "../components/Card";
import InputBox from "../components/InputBox";

const signup = () => {
  return (
    <Card>
      <InputBox title="firstName" field="text" />
      <InputBox title="lastName" field="text" />
      <InputBox title="username" field="text" />
      <InputBox title="password" field="password" />
      <Button text="sign in" />
    </Card>
  );
};

export default signup;
