import React from 'react'
import { Button } from '@chakra-ui/react';

type Props = {
  /** 表示する役の名前 */
  name: string;
  /** クリックされた役の一覧 */
  yakuStateList: string[];
  /** クリックされた役の一覧に追加する処理 */
  changeYakuState: (name: string) => void;

  setPinhuCheck:(arg0:boolean) => void;
};

// 得点計算に使用する役のボタン
export const YakuStateButtonForPinhu = (props: Props) => {
  const { name, yakuStateList, changeYakuState,setPinhuCheck } = props;

  // 自分の役が選択されているかどうかを判定する
  const targetYakuState = yakuStateList.find((yakuState) => yakuState === name);
  //このコードはtargetYakuStateがfindされたらisSelectedがtrueになるということ？
  const isSelected = targetYakuState !== undefined

  const addPinhu = (name:string) => {
    changeYakuState(name);
    setPinhuCheck(true);
  }

  return (
    <Button onClick={() => addPinhu(name)} isDisabled={isSelected} bg={isSelected ? 'gray.300' : 'gray.100'}>
      {name}
    </Button>
  );
};
export default YakuStateButtonForPinhu;