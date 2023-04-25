import React, { useState } from 'react'

const testpage = () => {
//    const [pai, setPai] = useState([]);
//
//    const paiCheck = () => {
//        get_mianzi(pai);
//    }

 const MachiList = tingpai_mianzi("1112345678999");
 const getMachistr1 = MachiList.map((list) => (
 list.substring(list.indexOf("[") + 1)
 ));
const getMachistr2 = getMachistr1.map((list) => (
    list.replace(/]/g,"")
));
console.log(getMachistr2);




/*
*  すべての面子の組合せを調べる
*    pai: 牌姿、n: 開始位置
*/
function get_mianzi(pai, n = 1) {

if (n > 9) return [[]];

/* 面子をすべて抜き取ったら次の位置に進む */
if (pai[n] == 0) return get_mianzi(pai, n+1);

/* 順子を抜き取る */
let shunzi = [];
if (n <= 7 && pai[n] > 0 && pai[n+1] > 0 && pai[n+2] > 0) {
    pai[n]--; pai[n+1]--; pai[n+2]--;
    shunzi = get_mianzi(pai, n);    // 抜き取ったら同じ位置で再試行する
    pai[n]++; pai[n+1]++; pai[n+2]++;
    for (let s_mianzi of shunzi) {  // 試行結果のすべてに抜いた順子を加える
        s_mianzi.unshift(`(${n}${n+1}${n+2})`);
    }
}

/* 刻子を抜き取る */
let kezi = [];
if (pai[n] == 3) {
    pai[n] -= 3;
    kezi = get_mianzi(pai, n+1);    // 抜き取ったら次の位置に進む
    pai[n] += 3;
    for (let k_mianzi of kezi) {    // 試行結果のすべてに抜いた刻子を加える
        k_mianzi.unshift(`(${n}${n}${n})`);
    }
}

/* 順子のパターンとと刻子のパターンをマージしてすべて返す */
return shunzi.concat(kezi);
}

/*
*  和了牌を抜き取る
*    pai: 牌姿、p: 和了牌
*/
function del_hulepai(mianzi, p) {

const regexp = new RegExp(`${p}`);  // 和了牌を見つける正規表現

/* 和了形の面子の中から和了牌を見つけマークする */
let new_mianzi = [];
for (let i = 0; i < mianzi.length; i++) {
    if (i > 0 && mianzi[i] == mianzi[i-1]) continue;    // 重複して処理しない
    let m = mianzi[i].replace(regexp, '');              // 和了牌を抜き取る
    if (m == mianzi[i]) continue;                       // できなければ次へ
    let tmp_mianzi = mianzi.concat();        // 和了形を複製する
    tmp_mianzi[i] = m.replace(/\((\d+)\)/, '[$1]');
                                            // 抜き取った面子と置き換える
    new_mianzi.push(tmp_mianzi);            // 結果に追加する
}
return new_mianzi;
}

/*
*  一般形の和了形を求める
*    pai: 牌姿、p: 和了牌
*/
function hule_mianzi_yiban(pai, p) {

/* すべての牌について雀頭あるかチェックする */
let mianzi = [];
for (let n = 1; n <= 9; n++) {
    if (pai[n] < 2) continue;
    pai[n] -= 2;    // 2枚以上ある牌を雀頭候補として抜き取る
    /* 残りの手牌から4面子となる組合せをすべて求める */
    for (let mm of get_mianzi(pai)) {
        if (mm.length != 4) continue;   // 4面子以外は和了形ではない
        mm.unshift(`(${n}${n})`);       // 雀頭を差し込む
        /* 和了牌を牌姿から抜き取る */
        mianzi = mianzi.concat(del_hulepai(mm, p));
    }
    pai[n] += 2;
}
return mianzi;
}

/*
*  七対子形の和了形を求める
*    pai: 牌姿、p: 和了牌
*/
function hule_mianzi_qidui(pai, p) {

/* すべての牌について対子があるかチェックする */
let mianzi = [];
for (let n = 1; n <= 9; n++) {
    if (pai[n] == 0) continue;  // 0枚の場合は継続
    if (pai[n] == 2) {          // 2枚(対子)の場合
        mianzi.push(n == p ? `[${n}]` : `(${n}${n})`);
    }
    else return [];             // それ以外は七対子にならない
}
return (mianzi.length == 7) ? [ mianzi] : [];
}

/*
*  和了形を求める
*    pai: 牌姿、p: 和了牌
*/
function hule_mianzi(pai, p) {

pai[p]++;                   // 和了牌を牌姿に加える
if (pai[p] > 4) return [];  // 不正な牌姿の場合

let emptyArray = [] ;
return emptyArray.concat(hule_mianzi_yiban(pai, p))     // 一般形
         .concat(hule_mianzi_qidui(pai, p));    // 七対子形
}

/*
 *  すべてのテンパイ形を求める
 *    paistr: 一色13枚の牌姿
 */
function tingpai_mianzi(paistr) {
  const rv = {} ;

  /* 入力から牌姿を作る */
  let pai = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let n of paistr.match(/\d/g)) {
    pai[n]++;
    if (pai[n] > 4) return []; // 不正な牌姿の場合
  }

  /* 1〜9 について以下を実行する */
  for (let p = 1; p <= 9; p++) {
    /* すべての和了形について以下を実行する */
    for (let mm of hule_mianzi(pai.concat(), p)) {
      let key = (mm).sort().join('');
      rv[key] = 1; // 重複を取り除く
    }
  }

  return Object.keys(rv);
}

return (
  <div>{tingpai_mianzi("1112345678999")}</div>
)
};

export default testpage;