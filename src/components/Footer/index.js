import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { Container } from "./style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div>
        <Link to="https://www.linkedin.com/in/hericfelix/">
          <SiLinkedin />
          <p>/in/hericfelix</p>
        </Link>
        <Link to="https://github.com/hericfelix">
          <ImGithub />
          <p>/hericfelix</p>
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
