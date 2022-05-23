import axios from "../utils/axios";
import { useAuth } from "./useAuth";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const { data } = await axios.get("auth/refresh", {
      withCredentials: true,
    });
    console.log("refresh", data);
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(data.accessToken);
      return { ...prev, accessToken: data.accessToken };
    });
    return data.accessToken;
  };
  return refresh;
};
