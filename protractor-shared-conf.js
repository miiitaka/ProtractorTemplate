'use strict';

/**
 * Test Runner Protractor Config File (Common)
 *
 * @link https://github.com/angular/protractor
 * */
exports.config = {
  /** selenium サーバーのアドレス */
  seleniumAddress: "http://localhost:4444/wd/hub",

  /**
   * テスト実行ブラウザと条件設定
   *
   * @link https://code.google.com/p/selenium/wiki/DesiredCapabilities
   * */
  multiCapabilities: [
    {
      browserName: 'firefox'
    },
    {
      browserName: 'chrome'
    }
  ],

  /** Test Target App Base URL */
  baseUrl: "http://localhost:8000/",

  /** Framework Setting & Jasmine Option Setting */
  framework: "jasmine2",
  jasmineNodeOpts: {
    showColors: true
  }
};