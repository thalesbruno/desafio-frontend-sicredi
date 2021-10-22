import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useFakeHttpClient from "./useFakeHttpClient";

export default function useGetUser() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [cookies] = useCookies();
  const { fakeGet } = useFakeHttpClient();

  const getUser = () => {
    const response = fakeGet('/user/current', { headers: { Authorization: `Beares ${cookies['jwt']}` } });
    if (response.status === 200) setIsLoggedIn(true);
  }

  useEffect(() => {
    getUser();
  }, [])

  return { isLoggedIn }
}