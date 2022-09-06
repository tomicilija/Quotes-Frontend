import axios from "axios";
import { MyQuote, QuoteResponse } from "../interfaces/QuoteInterfaces";

const axiosInstance = axios.create({ baseURL: "http://localhost:5000/" });

// API calls related to Quotes and Votes

export const getMyQuote = async (token: string): Promise<MyQuote> => {
  const response = await axiosInstance.get("/myquote", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUserQuote = async (id: string): Promise<MyQuote> => {
  const response = await axiosInstance.get(`/quote/${id}`, {});
  return response.data;
};

export const postMyQuote = async (
  text: string,
  token: string
): Promise<void> => {
  const response = await axiosInstance.post(
    "/myquote",
    { text: text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const updateMyQuote = async (
  text: string,
  token: string
): Promise<void> => {
  const response = await axiosInstance.patch(
    "/myquote",
    { text: text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const deleteMyQuote = async (token: string): Promise<void> => {
  const response = await axiosInstance.delete("/myquote", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const voteCheck = async (id: string, token: string): Promise<string> => {
  const response = await axiosInstance.get(`/user/${id}/vote`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const upvoteQuote = async (id: string, token: string): Promise<void> => {
  const response = await axiosInstance.post(
    `/user/${id}/upvote`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

export const downvoteQuote = async (
  id: string,
  token: string
): Promise<void> => {
  const response = await axiosInstance.post(
    `/user/${id}/downvote`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

export const deleteUpvote = async (
  id: string,
  token: string
): Promise<void> => {
  const response = await axiosInstance.delete(`/user/${id}/upvote`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteDownvote = async (
  id: string,
  token: string
): Promise<void> => {
  const response = await axiosInstance.delete(`/user/${id}/downvote`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getMostUpvoatedQuotes = async (): Promise<QuoteResponse[]> => {
  const response = await axiosInstance.get(`/likes`, {});
  return response.data;
};

export const getMostRecentQuotes = async (
  token: string
): Promise<QuoteResponse[]> => {
  const response = await axiosInstance.get(`/recent`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
