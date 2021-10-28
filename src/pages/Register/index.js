import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import registerFigure from "../../assets/registerFigure.svg";
import { Container, Content, Form, SelectBox, TextAreaBox } from "./style";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router";
import api from "../../services/api";
import { toast } from "react-toastify";

const Register = ({ isAutenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Field required"),
    email: yup.string().email("Invalid E-mail").required("Field required"),
    password: yup
      .string()
      .min("6", "Must have at least 6 characters")
      .required("Field required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match")
      .required("Field required"),
    contact: yup.string().required("Field required"),
    course_module: yup.string().required("Field required"),
    bio: yup.string().required("Field required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (isAutenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <Container>
      <Header isAutenticated={isAutenticated} />
      <Content>
        <Form onSubmit={handleSubmit(handleRegister)}>
          <h2>Register</h2>
          <Input
            register={register}
            name="name"
            label="Name"
            error={errors.name?.message}
          />
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
          <Input
            type="password"
            register={register}
            name="confirm_password"
            label="Confirm Password"
            error={errors.confirm_password?.message}
          />
          <Input
            register={register}
            name="contact"
            label="Contact"
            error={errors.contact?.message}
          />
          <SelectBox>
            <p>
              Course Module{" "}
              {!!errors.course_module?.message && (
                <span>{errors.course_module?.message}</span>
              )}
            </p>
            <select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
          </SelectBox>
          <TextAreaBox>
            <p>
              Bio{" "}
              {!!errors.bio?.message && <span> - {errors.bio?.message}</span>}
            </p>
            <textarea rows="4" {...register("bio")}></textarea>
          </TextAreaBox>
          <Button
            size="large"
            variant="contained"
            type="submit"
            color="secondary"
          >
            Register
          </Button>
        </Form>
        <figure>
          <img src={registerFigure} alt="registerFigure.svg" />
          <figcaption>registerFigure.svg</figcaption>
        </figure>
      </Content>
      <Footer />
    </Container>
  );
};

export default Register;
