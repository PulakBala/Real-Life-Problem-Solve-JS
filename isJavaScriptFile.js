/*
Problem:2  isJavaScriptFile 

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 
*/

//js function are define with the function keyword
function isJavaScriptFile(fileName){
      //if you enter something wrong then provided error message ---
   if(typeof fileName !== 'string') {
    return "Please enter a string"
   } 
   // error check end then start main code------->
    const fileChange = (fileName.split(".").pop());
    //split(".") a string into separate sentences or pop() changes the original array
    if(fileChange == "js") {
       return true;
    }
    else{                                     
        return false;
    }
}
// function call this will return true or false
const extension = isJavaScriptFile("hello.js");