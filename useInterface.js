function useInterface(){
    let task = prompt('What is your bidding, my master? Enter the number corresponding to the task you\'d like to perform: 1): Print Inventory and Prices, 2): Print Total Revenue, 3): Create New Donut Type, 4): Update Inventory, 5): Place Order, 6): Change a Price, 7): Give Refund, 8): Quit Program', '1');
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
            changePrice(newPriceType(), newPrice());
            break;
        case '7':
            giveRefund(getRefund());
            break;
        case '8':
            break;
    }
}