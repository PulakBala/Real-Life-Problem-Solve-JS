//Problem:1  radianToDegree

function radianToDegree(radians) {

   if(typeof radians !== 'number') {
    return "Please enter a number"
   } 
  
    return radians * (180 / Math.PI);
}
const radian = radianToDegree(10);
const radianNum = parseFloat(radian.toFixed(2));


//Problem:2  isJavaScriptFile 


function isJavaScriptFile(fileName){
 if(typeof fileName !== 'string') {
  return "Please enter a string"
 } 
  const fileChange = (fileName.split(".").pop());
  if(fileChange == "js") {
     return true;
  }
  else{                                     
      return false;
  }
}
const extension = isJavaScriptFile("hello.js");



// Problem 3: oilPrice 

function oilPrice(dieselQuantity1, petrolQuantity2, octaneQunatity3) {

  if(typeof dieselQuantity1 !== 'number' || typeof petrolQuantity2 !== 'number' || typeof octaneQunatity3 !== 'number') {
   return "Please enter a number"
  } 
   
   const dieselPrice = 114;
   const petrolPrice = 130;
   const octanePrice = 135;

   const diesel = dieselQuantity1 * dieselPrice;
   const petrol = petrolQuantity2 * petrolPrice;
   const octane = octaneQunatity3 * octanePrice;

   const totoalPrice = diesel + petrol + octane ;
   return totoalPrice;
}
const totalAmount = oilPrice(1, 2, 3); 


// Problem 4:publicBusFare

function publicBusFare(carFare) {
  if(typeof carFare !== 'number') {
   return "Please enter a number"
  }   
   let car , total;
   car = carFare % 50;
   car = car % 11;
   total = car * 250;
   return total;
}
let totalMoney = publicBusFare(112);


//Problem 5: isBestFriend-------

function isBestFriend(p1, p2,) {
    if ((p1.name == p2.friend) && (p2.name == p1.friend)) {
        return true;
    }
    else {
        return false;
    }
}
const person1 = { name: 'Nayon', friend: 'Mamun' };
const person2 = {name: 'Mamun', friend: 'Nayon'};

const bestu = isBestFriend(person1, person2);

