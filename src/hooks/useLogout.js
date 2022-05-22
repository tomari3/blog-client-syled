import axios from "../utils/axios";
import { useAuth } from "./useAuth";

export const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const res = await axios("auth/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};
