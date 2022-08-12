/*Problem:1  radianToDegree

ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
*/

//js function are define with the function keyword
function radianToDegree(radians) {

    //if you enter something wrong then provided error message ---

   if(typeof radians !== 'number') {
    return "Please enter a number"
   } 
   // error check end then start main code------->
    return radians * (180 / Math.PI);
}
//radian value test 10
const radian = radianToDegree(10);
//toFixed() method rounds the string to a specified number of decimals.
const radianNum = parseFloat(radian.toFixed(2));
//parseFloat() method parses a value as a string and returns the first number.
