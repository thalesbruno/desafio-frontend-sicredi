import { useState } from "react";
import { useCookies } from "react-cookie";
import useFakeHttpClient from "./useFakeHttpClient";

export default function useCheckLogin() {
  const { fakeGet } = useFakeHttpClient();
  const [cookies] = useCookies();

  const checkLogin = () => {
    const response = fakeGet('/user/current', { headers: { Authorization: `Bearer ${cookies['jwt']}` } });
    if (response.status === 200) return true
    return false
  }

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(checkLogin());

  return { isLoggedIn, setIsLoggedIn }
}