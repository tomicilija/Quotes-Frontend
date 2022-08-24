import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/" });

interface Quote {
  quote: string;
}

interface MyQuoteRes {
  id: string;
  text: string;
  karma: number;
  creation_date: string;
}

interface UserRes {
  id: number;
  firstName: string;
  lastName: string;
}

export interface QuoteRes {
  //userId: number,
  karma: number;
  text: string;
  name: string;
  surname: string;
}

interface VoteCheckRes {
  userId: number;
  vote: number;
}

export const getMyQuote = (token: string): Promise<MyQuoteRes> =>
  api
    .get("/myquote", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const postMyQuote = (text: string, token: string): Promise<void> =>
  api
    .post(
      "/myquote",
      { text: text },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => res.data);

export const updateMyQuote = (text: string, token: string): Promise<void> =>
  api
    .patch(
      "/myquote",
      { text: text },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => res.data);

export const deleteMyQuote = (token: string): Promise<void> =>
  api
    .delete("/myquote", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const upvoteUser = (id: number, token: string): Promise<QuoteRes> =>
  api
    .put(
      `/user/${id}/upvote`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data);

export const downvoteUser = (id: number, token: string): Promise<QuoteRes> =>
  api
    .put(
      `/user/${id}/downvote`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data);

export const deleteVote = (id: number, token: string): Promise<QuoteRes> =>
  api
    .delete(`/user/${id}/vote`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const voteCheck = (id: number, token: string): Promise<VoteCheckRes> =>
  api
    .get(`/user/${id}/vote`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const getList = (): Promise<QuoteRes[]> =>
  api.get(`/likes`, {}).then((res) => res.data);

export const getRecent = (token: string): Promise<QuoteRes[]> =>
  api
    .get(`/recent`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
