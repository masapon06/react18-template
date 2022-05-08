## 概要

このリポジトリは下記の環境で開発するためのテンプレートです

- React v18
- webpack5
- TypeScript

## ローカル

[webpack-dev-server](https://webpack.js.org/configuration/dev-server/#root)を使用

```
$ yarn install

$ yarn run start
```

## ビルドの流れ

```mermaid
sequenceDiagram
    participant tsl as tsloader
    participant tsc as tsc
    participant ts as TypeScript
    participant es6 as EcmaScript6
    participant es5 as EcmaScript5
    ts ->> tsl: loader
    tsl ->> tsc: loader経由でtsc実行
    tsc ->> es6: トランスパイル
    es6 ->> es5: コンパイル・バンドル
```

## 参考

https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

https://webpack.js.org/concepts/
