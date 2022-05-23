import axios from "../utils/axios";
import { useAuth } from "./useAuth";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const {
      data: { _id, username, accessToken, roles },
    } = await axios.get(`auth/refresh`, {
      withCredentials: true,
    });

    setAuth({ _id, username, accessToken, roles });

    return accessToken;
  };
  return refresh;
};
