
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const Logout = () => {
  const history = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    history.push("/login");
  }, [history]);

  return null;
};

export default Logout;

