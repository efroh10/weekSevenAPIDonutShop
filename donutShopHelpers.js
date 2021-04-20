function getInventory(){
    console.log(masterInventory); 
    useInterface();
 }
 
 function getRevenue(){
     alert(revenue);
     useInterface();
 }
 
 function newDonutType(){
     newType = prompt('Enter the type of your new donut.');
     return newType;
 }
 
 function newDonutName(){
     newName = prompt('Enter the name of your new donut.');
     return newName;
 }
 
 function newDonutPrice(){
     newPrice = Number(prompt('Enter the price of your new donut.'));
     return newPrice;
 }
 
 function newDonutInventory(){
     newInventory = Number(prompt('Enter the inventory of your new donut.'));
     return newInventory;
 }
 
 function newDonut(type, name, price, inventory){
     masterInventory[type] = new Donut(name, price, inventory);
     useInterface();
 }
 //this program assumes throughout that the user knows all donut types.
 function increaseType(){
     increasedType = prompt('Enter the type of donut for which you\'d like to increase the inventory.');
     return increasedType;  
 }
 
 function increaseNumber(){
     increasedNumber = Number(prompt('Enter the number by which you\'d like to increase the inventory.'));
     return increasedNumber;
 }
 
 function increaseInventory(type, number){
     masterInventory[type].inventory += number;
     useInterface();
 }
 
 function newOrderType(){
     newOrderedType = prompt('Enter the type of donut you\'d like to order.');
     return newOrderedType;
 }
 
 function newOrderNumber(){
     newOrderedNumber = Number(prompt('Enter the number of donuts you\'d like to order.'));
     return newOrderedNumber;
 }
 
 function decreaseInventory(type, number){
     masterInventory[type].inventory -= number;
     
 }
 
 function increaseRevenue(type, number){
     revenue += masterInventory[type].price * number;
 }
 
 function newOrder(type, number){
     if (number > masterInventory[type].inventory){
         number = masterInventory[type].inventory;
     }
     decreaseInventory(type, number);
     increaseRevenue(type, number);
     useInterface();
 }
 
 function newPriceType(){
     changedType = prompt('Enter the type of donut for which you\'d like to change the price.');
     return changedType;
 }
 
 function newPrice(){
     changedPrice = Number(prompt('Enter the new price.'));
     return changedPrice;
 }
 
 function changePrice(type, number){
     masterInventory[type].price = number;
     useInterface();
 }
 
 function getRefund(){
     refund = Number(prompt('Enter the amount of the refund.'));
     return refund;
 }
 
 function giveRefund(number){
     revenue -= number;
     useInterface();
 }