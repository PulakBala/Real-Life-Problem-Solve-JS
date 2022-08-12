//একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি  রিটার্ন করবে । 

//js function are define with the function keyword
function publicBusFare(carFare) {

     //if you enter something wrong then provided error message ---
   if(typeof carFare !== 'number') {
    return "Please enter a number"
   } 
   // error check end then start main code------->

    let car , total;
    car = carFare % 50;
    car = car % 11;
    total = car * 250;
    return total;
}
// function call
let totalMoney = publicBusFare(112);
