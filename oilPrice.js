
//js function are define with the function keyword
function oilPrice(dieselQuantity1, petrolQuantity2, octaneQunatity3) {

     //if you enter something wrong then provided error message ---
   if(typeof dieselQuantity1 !== 'number' || typeof petrolQuantity2 !== 'number' || typeof octaneQunatity3 !== 'number') {
    return "Please enter a number"
   } 
   // error check end then start main code------->
    
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const diesel = dieselQuantity1 * dieselPrice;
    const petrol = petrolQuantity2 * petrolPrice;
    const octane = octaneQunatity3 * octanePrice;

    const totoalPrice = diesel + petrol + octane ;
    //return total price----
    return totoalPrice;
}
//function call
const totalAmount = oilPrice(1, 2, 3); 
