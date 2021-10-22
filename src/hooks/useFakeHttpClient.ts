import userData from '../user.json';

interface HTTPBody {
  username: string;
  password: string;
}

export default function useFakeHttpClient() {
  const fakePost = (path: string, reqBody: HTTPBody) => {
    if (reqBody.username === userData.username && reqBody.password === userData.password) {
      return { status: 200, token: userData.token }
    } else {
      return { status: 401, error: "Erro ao efetuar o login" }
    }
  }

  const fakeGet = (path: string, options: { headers: { Authorization: string } }) => {
    if (options.headers.Authorization.split(' ')[1] === userData.token) return { status: 200 }
    return { status: 401 }
  }

  return { fakePost, fakeGet }
}