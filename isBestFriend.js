/*
তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
*/

//js function are define with the function keyword
function isBestFriend(p1, p2,) {
    if ((p1.name == p2.friend) && (p2.name == p1.friend)) {
        return true;
    }
    else {
        return false;
    }
}
//define(and create) a JavaScript object with an object literal
const person1 = { name: 'Nayon', friend: 'Mamun' };
//the name:values pairs in js objects are called properties
const person2 = {name: 'Mamun', friend: 'Nayon'};

const bestu = isBestFriend(person1, person2);
