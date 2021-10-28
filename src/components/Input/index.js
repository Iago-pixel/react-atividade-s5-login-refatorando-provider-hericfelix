import { Container, InputBox } from "./style";

const Input = ({ error, label, register, name, ...rest }) => {
  return (
    <Container>
      <p>
        {label} {!!error && <span> - {error}</span>}
      </p>
      <InputBox>
        <input {...register(name)} {...rest}></input>
      </InputBox>
    </Container>
  );
};

export default Input;
