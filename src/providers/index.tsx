import { ReactNode } from "react";
import { AccountProvider } from "./Account";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <AccountProvider>{children}</AccountProvider>;
};

export default Providers;
