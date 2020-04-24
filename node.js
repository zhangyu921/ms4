const sm4utils = require("./js/sm4utils");

var sKey = "qawsedrftgyhujik";
var sm4 = new sm4utils(sKey);

["ABC", "abc", "ABCabc", "ABC123", "abc123", "123", "你好吗"].map((text) => {
  console.log("原文：", text);
  console.time("加密耗时");
  var endata = sm4.encryptData_ECB(text);
  console.timeEnd("加密耗时");
  console.log("密文：", endata);
  console.time("解密耗时");
  var dedata = sm4.decryptData_ECB(endata);
  console.timeEnd("解密耗时");
  console.log("解密：", dedata);
  console.log("-----------");
});
