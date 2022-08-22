import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/" });

interface Register {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface Login {
  email: string;
  password: string;
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

interface QuoteRes {
  quotes: {
    //userId: number,
    karma: number;
    text: string;
    name: string;
    surname: string;
  }[];
}

interface GetUserVotesRes {
  votes: [QuoteRes];
}

interface LoginRes {
  access_token: string;
}

export const register = (user: Register): Promise<UserWithEmailRes> =>
  api.post("/register", user).then((res) => res.data);

export const login = (user: Login): Promise<LoginRes> =>
  api.post("/login", user).then((res) => res.data);

export const getUser = (token: string): Promise<UserWithEmailRes> =>
  api
    .get("/me", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const updatePassword = (
  password: UpdatePassword,
  token: string
): Promise<UserRes> =>
  api
    .put("/me/update-password", password, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const getUserVotes = (
  id: string,
  token: string
): Promise<[{ karma: 0; text: ""; name: ""; surname: "" }]> => {
  //console.log(id);
  return api
    .get(`/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.length > 0) {
        //console.log(res.data);
        return res.data;
      } else {
        return "No votes";
      }
    })
    .catch((e) => {
      //console.log(e);
      return e;
    });
};
