import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container, Content, Form } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { Redirect } from "react-router";
import { useAccount } from "../../providers/Account";

const Login = () => {
  const { isAutenticated, handleLogin } = useAccount();

  interface LoginData {
    email: string;
    password: string;
  }
  const schema = yup.object().shape({
    email: yup.string().required("Field required"),
    password: yup.string().required("Field required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: LoginData) => {
    handleLogin(data);
  };

  if (isAutenticated) {
    return <Redirect to="/profile" />;
  }
  return (
    <Container>
      <Header />
      <Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <Input
            register={register}
            name="email"
            label="E-mail"
            error={errors.email?.message}
          />
          <Input
            type="password"
            register={register}
            name="password"
            label="Password"
            error={errors.password?.message}
          />
          <Button
            color="secondary"
            sx={{ width: 250 }}
            size="large"
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default Login;
