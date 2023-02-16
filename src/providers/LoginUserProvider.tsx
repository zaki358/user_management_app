import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";

import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  //&で型をつなげる→その型を追加した新しい型になる
  loginUser: LoginUser | null;
  //useState等の更新関数の型は DispatchとSetStateActionを使う
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

//asは強制的にこの型ですよと認識させる意味
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
