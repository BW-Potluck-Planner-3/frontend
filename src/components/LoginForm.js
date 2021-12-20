import { useState } from "react";
import { useHistory } from "react-router";

import { connect } from "react-redux";
import { handleLogin } from "../lib/actions/handleLogin";
import { H2, Form, Label, Input, Button, A, Div } from "./FormStyledComponents";

import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

const initialCredentials = { username: "", password: "" };
const iconStyle = {
  width: "10%",
  margin: "0.4rem 0",
  alignSelf: "center",
  fill: "rgba(0,0,0,0.7)",
};

const LoginForm = ({ handleLogin }) => {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState(initialCredentials);

  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    await handleLogin(credentials);
    push("/plants");
  };

  return (
    <Form onSubmit={submit}>
      <H2>Login</H2>
      <Label>
        Username:
        <Div>
          <BsFillPersonFill style={iconStyle} />
          <Input
            onChange={change}
            value={credentials.username}
            name="username"
            type="text"
            placeholder="Username"
            login
          />
        </Div>
      </Label>

      <Label>
        Password:
        <Div>
          <AiFillLock style={iconStyle} />
          <Input
            onChange={change}
            value={credentials.password}
            name="password"
            type="password"
            placeholder="Password"
            login
          />
        </Div>
      </Label>
      <A href="#">Forgot Password?</A>
      <Button>Login</Button>
    </Form>
  );
};

export default connect(null, { handleLogin })(LoginForm);
