"use strict";

var obj = {
    name: "tom",
    logName: function logName() {
        console.log(this.name);
    }
};
var str = "zhe是字符创";
var fun1 = function fun1() {
    var str = "ss";
};
obj.logName();
