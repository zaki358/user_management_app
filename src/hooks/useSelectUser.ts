import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectUser, setSelectUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users,onOpen } = props;
    const targetUser = users.find((users) => users.id === id);
    //??は左辺がnullまたはundefindの場合右辺を返す
    setSelectUser(targetUser ?? null);
    //!はtypescriptの機能で絶対にundefingにはならないよ。必ず値はあるよと示すもの
    // setSelectUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectUser };
};
