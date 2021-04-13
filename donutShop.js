class   Donut   {
    constructor(name, price, inventory){
        this.name = name;
        this.price = price;
        this.inventory = inventory;
    }
}

const masterInventory = {
    'glazed' : new Donut('Glazed Donut', 1, 10),
    'jellyFilled' : new Donut('Jelly-Filled Donut', 1.5, 8)
};

let revenue = 0;

function useInterface(){
    let task = prompt('What is your bidding, my master? Enter the number corresponding to the task you\'d like to perform: 1: Print Inventory and Prices, 2: Print Total Revenue, 3: Create New Donut Type, 4: Update Inventory, 5: Place Order, 6: Quit Program', '1');
    switch (task) {
        case '1':
            getInventory();
            break;
        case '2':
            getRevenue();
            break;
        case '3':
            newDonut(newDonutType(), newDonutName(), newDonutPrice(), newDonutInventory());
            break;
        case '4':
            increaseInventory(increaseType(), increaseNumber());
            break;
        case '5':
            newOrder(newOrderType(), newOrderNumber());
            break;
        case '6':
            break;
    }
}

function getInventory(){
   alert(masterInventory);
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
    decreaseInventory(type, number);
    increaseRevenue(type, number);
    useInterface();
}