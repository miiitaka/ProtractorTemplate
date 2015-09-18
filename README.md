# Protractor Template
AngularJSのE2Eテスト用にテンプレートを作成。テストケースを増やす毎に書き足し。

## 環境設定

ProtractorはNode.js上で動作するが、Javaの実行環境が必要なのでそちらを事前に準備しておくこと。

### Protractor のインストール

```
npm install -g protractor
```

### Selemnium Server のインストール

ブラウザ操作のために WebDriverJS を使用する。[http://webdriver.io](http://webdriver.io)  
中継サーバーに Selenium Server を使用する。Protractor をインストール後に以下のコマンドを実行してインストールする。

```
webdriver-manager update
```

## テスト実行

### Selenium Server の起動

```
webdriver-manager start
```

### Protractor 実行

```
protractor protractor-conf.js
```