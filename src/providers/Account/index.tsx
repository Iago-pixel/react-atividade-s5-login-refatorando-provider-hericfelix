import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

interface RegisterData {
  email: string;
  password: string;
  name: string;
  contact: string;
  bio: string;
  course_module: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AccountProviderData {
  token: string;
  isAutenticated: boolean;
  handleLogin: (data: LoginData) => void;
  handleLogout: () => void;
  handleRegister: (data: RegisterData) => void;
}

interface AccountProps {
  children: ReactNode;
}

const AccountContext = createContext<AccountProviderData>(
  {} as AccountProviderData
);

export const AccountProvider = ({ children }: AccountProps) => {
  const history = useHistory();

  const [token, setToken] = useState(
    localStorage.getItem("@KenzieHub:token") || ""
  );
  const [isAutenticated, setIsAutenticated] = useState(false);
  const [userId, setUserId] = useState(
    localStorage.getItem("@KenzieHub:id") || ""
  );

  useEffect(() => {
    localStorage.setItem("@KenzieHub:token", token);
    if (token) {
      setIsAutenticated(true);
    } else {
      setIsAutenticated(false);
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem("@KenzieHub:id", userId);
  }, [userId]);

  const handleRegister = (data: RegisterData) => {
    api
      .post("/users", data)
      .then((_) => {
        toast.success("Account created!");
        history.push("/login");
      })
      .catch((err) =>
        toast.error("E-mail already in use, please user another one!")
      );
  };

  const handleLogin = (data: LoginData) => {
    api
      .post("/sessions", data)
      .then((res) => {
        setToken(res.data.token);
        setUserId(res.data.user.id);
        return history.push("/profile");
      })
      .catch((_) => toast.error("Wrong e-mail or password!"));
  };
  const handleLogout = () => {
    setToken("");
    localStorage.clear();
    history.push("/");
  };

  return (
    <AccountContext.Provider
      value={{
        handleLogin,
        handleLogout,
        isAutenticated,
        token,
        handleRegister,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
