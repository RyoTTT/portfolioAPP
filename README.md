# アプリ概要
　近年、スマホアプリで麻雀ゲームが人気になっていたり、麻雀のプロリーグがネット番組で多くの視聴者を集めていたりと、インターネットの発展に伴って麻雀がより多くの人に遊ばれるものになっています。その一方でスマホアプリから麻雀を始めて実際に麻雀を打つと点数の計算や手牌をサポートなしで打たなければなりません。上級者の雀士の方も点数や精算などの計算に手間がかかってしまいます。
麻雀初心者の方にとっては麻雀アプリにあるようなサポートアプリとして、麻雀上級者の方にとっては麻雀の手間を省けるアプリとしてだれでも麻雀をより気楽に打てるようになってもらいたく、このアプリを企画、制作しました。
# アプリ
・ホーム画面
<img src="https://github.com/RyoTTT/portforioAPP/assets/115979071/752b6f56-0732-4961-a16c-12bdd6b1029c">
・得点計算
![スクリーンショット 2023-05-26 15 01 55](https://github.com/RyoTTT/portforioAPP/assets/115979071/86d98928-3256-41f3-9669-288b8c9c5778)
・履歴ページ
![スクリーンショット 2023-05-26 15 02 16](https://github.com/RyoTTT/portforioAPP/assets/115979071/f7f68c44-38ed-45b0-8b97-1a2459e4ff9b)

# アプリURL
https:/portforio-app-mahjong.vercel.app/

# デモアカウント
googleにて以下のアカウントにログインして使ってください。

アドレス:potforio.test.acount0205@gmail.com
パスワード:test0205

# アプリ機能一覧
1.役一覧
役の翻別で役の紹介(翻数、鳴きの可否、説明、例)ページです。検索機能つき。

2.点数計算
　1.点数計算
    和了した役を選択すると点数を計算します。和了した役はログインしていれば記録することができます。
  2.点数票
    麻雀の点数表です。
  3.符計算の概要
    麻雀の点数計算をややこしくする符計算について解説しています。

3.待ち牌確認
手牌が一種類の数字の牌の時テンパイしているかどうかを手牌の数字を入力するとテンパイしているかどうか+何待ちなのかを調べて表示します。

4.履歴
    1.役上がり歴
    　自分がこれまでどんな役で和了したのかを見ることができます。自分がよく和了している役を見ることで自分の癖を見つけることができます。(要ログイン)
    2.精算
    　麻雀のゲーム終了後に行う総合順位を決める計算を行うことができます。レート換算も可能です。
    3.総合対戦履歴
     麻雀を打った日の総合の対戦結果を記録することができます。(要ログイン)

# 開発環境
    chakra-ui/react:2.5.1,
    firebase:9.20.0,
    next:13.2.3,
    react:18.2.0,
    react-dom:18.2.0,
    recoil:0.7.7,
    typescript:4.9.5

# 環境構築、実行方法
1.VSCodeにて、Next.jsを用いたアプリファイルを作成します。
　`$ npm create-next-app@13`
プロンプト選択部分ではTypeScript,EslintをYesとして残りは全てNoで設定します。

2.chakra-uiをインストールします。
　`$ npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`
    chakra-uiはindex.tsxファイル内の関数内で以下の記述が必要です。

(index.tsx)
`import React from 'react'`
`import { ChakraProvider } from '@chakra-ui/react'`

`function App() {
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}`

3.recoilをインストールします
  `$ npm i recoil`

4.firebaseをインストールします。
  `$ npm i firebase@9`
