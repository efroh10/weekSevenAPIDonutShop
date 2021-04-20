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