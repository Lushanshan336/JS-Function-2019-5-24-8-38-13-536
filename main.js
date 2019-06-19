//作业1：将一个字符串逆序输出 main.js
function reverseString(message){
	var oStr = '';
	for(var i=message.length-1;i>=0;i--){
	oStr += message.charAt(i);
	}
	return oStr;
}
	var message = "hello";
	alert(reverseString(message));  //  'olleh'
------------------------------------------
//作业2：判断一个字符串是否是回文串 main1.js
function palindrome(message){
	var len = message.length;
    var str1 = "";
    for(var i=len-1; i>=0;i--){
        str1+=message[i];
    }
    alert(str1 == message)
}
palindrome('hello'); //  false
palindrome('abcba'); //  true
--------------------------------------------
//作业3：按字母表顺序输出传入的参数字符串 main2.js



--------------------------------------------
//作业4：计算出一个字符串共有多少个单词组成  main3.js
var r = 0;
var n; 
function countWords(message){	       
        n = message.split(" ")   
        r = n.length;           
        return r;
}
countWords('Good morning, I love JavaScript.');
alert(r); //5
