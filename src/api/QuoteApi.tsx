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

export const postMyQuote = (quote: Quote, token: string): Promise<MyQuoteRes> =>
  api
    .post("/myquote", quote, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const updateMyQuote = (
  quote: Quote,
  token: string
): Promise<MyQuoteRes> =>
  api
    .put("/myquote", quote, { headers: { Authorization: `Bearer ${token}` } })
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

export const getList = (sort: string, page: number): Promise<QuoteRes[]> =>
  api
    .get(`/likes`, {
      params: {
        sort,
        page, 
      },
    })
    .then((res) => res.data);

    export const getRecent = (sort: string, page: number, token: string): Promise<QuoteRes[]> =>
      api
        .get(`/recent`, {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            sort,
            page, 
          },
        })
        .then((res) => res.data);
