import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import useFakeHttpClient from './useFakeHttpClient';

interface HTTPBody {
  username: string;
  password: string;
}

export default function useAuth() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const history = useHistory();
  const { fakePost } = useFakeHttpClient();

  const loginUser = (data: HTTPBody) => {
    const response = fakePost('/auth/login', data);
    if (response.token) {
      const { token } = response;
      setCookie('jwt', token);
      history.push('/home');
      return
    }
    return response.error
  }

  const logoutUser = () => {
    removeCookie('jwt');
    history.push('/login')
  }

  return { loginUser, logoutUser }
}