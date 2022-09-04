import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/" });

interface Register {
  email: string;
  pass: string;
  passConfirm: string;
  name: string;
  surname: string;
}

interface Login {
  email: string;
  pass: string;
}

interface UpdatePassword {
  password: string;
}

interface UserRes {
  id: string;
  firstName: string;
  lastName: string;
}

interface UserWithEmailRes {
  id: string;
  email: string;
  name: string;
  surname: string;
}
/*interface QuoteRes {
  quotes: {
    //userid: string,
    karma: number;
    text: string;
    name: string;
    surname: string;
  }[];
}*/
interface LoginRes {
  accessToken: string;
}

export const signUp = (user: Register): Promise<string> =>
  api.post("/signup", user).then((res) => res.data);

export const signIn = (user: Login): Promise<LoginRes> =>
  api.post("/login", user).then((res) => res.data);

export const getUser = (token: string): Promise<UserWithEmailRes> =>
  api
    .get("/me", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const updateUser = (user: Register, token: string): Promise<void> =>
  api
    .patch("/me/update-password", user, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const deleteUser = (token: string): Promise<void> =>
  api
    .delete("/me", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const getUserVotes = (
  id: string,
  token: string
): Promise<[{ userid: ""; karma: 0; text: ""; name: ""; surname: "" }]> => {
  return api
    .get(`/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};
