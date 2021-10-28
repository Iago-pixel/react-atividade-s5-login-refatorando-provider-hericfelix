import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container, List } from "./style";
import { useHistory } from "react-router-dom";
import { useAccount } from "../../providers/Account";

const Header = () => {
  const history = useHistory();

  const { handleLogout, isAutenticated } = useAccount();

  return (
    <Container>
      <div>
        <figure onClick={() => history.push("/")}>
          <img src={logo} alt="Logo KenzieHub"></img>
        </figure>
        <List>
          {isAutenticated ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Portfolios</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <p onClick={handleLogout}>Logout</p>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Portfolios</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </List>
      </div>
    </Container>
  );
};

export default Header;
