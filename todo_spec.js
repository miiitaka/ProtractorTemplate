'use strict';

describe('ToDo App Test', function () {
  var
    input,
    send,
    todos;

  beforeEach(function () {
    browser.get('index.html');
    input = element(by.model('inputTitle'));
    send = $('input[type="submit"]');
    todos = element.all(by.repeater('todo in todos'));
  });

  it('ToDo Add List', function () {
    expect(todos.count()).toEqual(0);
    input.sendKeys('new task add');
    send.click();
    expect(todos.count()).toEqual(1);
    expect(todos.get(0).getText()).toEqual('new task add');
  });
});