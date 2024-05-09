import { User } from "data/@types/user";

export interface AuthState {
  user: User | null;
  token: string | null;
}

export type Action =
  | { type: "LOGIN"; payload: { user: User; token: string } }
  | { type: "LOGOUT" };

export const initialState: AuthState = {
  user: null,
  token: null
};

export const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
