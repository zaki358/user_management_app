import { useContext } from "react";
import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserProvider";

//コンテキスト（グローバルステート）もカスタムフック化すると便利

export const useLoginUser = ():LoginUserContextType => useContext(LoginUserContext);
