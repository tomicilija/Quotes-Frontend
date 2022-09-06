export interface MyQuote {
  userid: string;
  text: string;
  karma: number;
  creation_date: string;
}

export interface QuoteResponse {
  userid: string;
  karma: number;
  text: string;
  name: string;
  surname: string;
}

export interface Register {
  email: string;
  pass: string;
  passConfirm: string;
  name: string;
  surname: string;
}

export interface Login {
  email: string;
  pass: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  surname: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface CardProps {
  userid: string;
  karma: number;
  quote: string;
  firstName: string;
  lastName: string;
}

export interface GridProps {
  quotes: {
    userid: string;
    karma: number;
    text: string;
    name: string;
    surname: string;
  }[];
}

export interface CreateQuoteProps {
  isQuoteOpen: boolean;
  setIsQuoteOpen: (isQuoteOpen: boolean) => void;
}

export interface ProfileSettingsProps {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (isSettingsOpen: boolean) => void;
}