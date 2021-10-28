import Footer from "../../components/Footer";
import Header from "../../components/Header";
import homeFigure from "../../assets/homeFigure.svg";
import Button from "@mui/material/Button";
import { Container, Content, Background } from "./style";
import { useHistory, Link } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/register");
  };

  return (
    <Container>
      <Header />
      <Content>
        <figure>
          <img src={homeFigure} alt="homeFigure.svg" />
          <figcaption>homeFigure.svg</figcaption>
        </figure>
        <div>
          <h2>Kenzie devs portfolio Hub</h2>
          <Button
            onClick={handleClick}
            sx={{ width: 250 }}
            size="large"
            variant="contained"
          >
            Register
          </Button>
          <p>
            Already has an account?
            <Link to="/login"> Click here to login!</Link>
          </p>
        </div>
      </Content>
      <Footer />
      <Background />
    </Container>
  );
};

export default Home;
