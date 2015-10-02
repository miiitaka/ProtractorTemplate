# Protractor Template
AngularJSのE2Eテスト用にテンプレートを作成します。テストケースを増やす毎に書き足す予定。

## 環境設定

ProtractorはNode.js上で動作しますが、Javaの実行環境が必要なのでそちらを事前に準備しておくこと。
※ package.json と bower.json のインストールも忘れずに。

### Protractor のインストール

```
npm install -g protractor
```

### Selemnium Server のインストール

ブラウザ操作のために WebDriverJS を使用します。[http://webdriver.io](http://webdriver.io)
中継サーバーに Selenium Server を使用します。Protractor をインストール後に以下のコマンドを実行してインストールします。

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