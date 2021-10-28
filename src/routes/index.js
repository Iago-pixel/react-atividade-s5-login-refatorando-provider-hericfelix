import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { createTheme, ThemeProvider } from "@mui/material";

const Routes = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#017BFF",
      },
      secondary: {
        main: "#09053C",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register isAutenticated={isAutenticated} />
        </Route>
        <Route path="/profile">
          <Profile
            setIsAutenticated={setIsAutenticated}
            isAutenticated={isAutenticated}
          />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default Routes;
