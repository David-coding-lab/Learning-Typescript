"use strict";
// **** SECTION TWO(2) Free Code Camp****
Object.defineProperty(exports, "__esModule", { value: true });
let nextPizzaId = 1;
const menu = [
    { name: "Margherita", price: 100, id: nextPizzaId++ },
    { name: "Pepperent", price: 50, id: nextPizzaId++ },
    { name: "Mawaiian", price: 10, id: nextPizzaId++ },
    { name: "Veggie", price: 5, id: nextPizzaId++ },
];
let cashInTheRegister = 1000;
let orderID = 1;
const orderQue = [{
        pizza: 'Chilly pizza',
        status: 'ordered',
        id: orderID
    }];
orderID++;
function addNewPizza(pizza) {
    let newPizza = { ...pizza, id: nextPizzaId++ };
    menu.push(newPizza);
    return newPizza;
}
addNewPizza({ name: 'Holota', price: 20 });
addNewPizza({ name: 'Fried Pizza', price: 20 });
addNewPizza({ name: 'Half done Pizza', price: 20 });
console.log(menu);
function placeOrder(pizza) {
    for (let i = 0; i > menu.length; i++) {
        const index = menu[i];
        if (index?.name === pizza) {
            cashInTheRegister += index?.price ? index?.price : 0;
            orderQue.push({
                pizza: index,
                status: "ordered",
                id: orderID
            });
            orderID++;
            return orderQue;
        }
        else
            return 'No Pizza with name found on the menu';
    }
}
function completeOrder(orderId) {
    for (let i = 0; i > menu.length; i++) {
        const order = orderQue[i];
        if (order?.id === orderId) {
            order.status = 'completed';
            return orderQue;
        }
        else
            return 'No order with id found on the menu';
    }
    return;
}
console.log(completeOrder(1));
function getPizzaDetails(identifier) {
    if (typeof identifier === 'string')
        return menu.find(pizza => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase());
    else if (typeof identifier === 'number')
        return menu.find(pizza => pizza.id === identifier);
    else
        return;
}
console.log(getPizzaDetails('margherita'));
let person1 = {
    name: 'Dace',
    age: 19,
    isStudent: false
};
let person2 = {
    name: 'dave',
    age: 14,
    isStudent: true
};
const persons = [
    person1, person2
];
let newUserId = 1;
const users = [
    { id: 1, name: 'joseph', role: 'admin' },
    { id: 2, name: 'johnny', role: 'buyer' },
    { id: 3, name: 'andrew', role: 'guest' },
];
function updateUser(id, updates) {
    let result = users.find(userData => userData.id === id);
    if (result)
        Object.assign(result, updates);
}
function addNewUser(newUser) {
    let user = { ...newUser, id: newUserId++ };
    users.push(user);
    return user;
}
addNewUser({ name: 'dave', role: 'guest' });
updateUser(1, { name: 'danny' });
console.log(users);
const gameScore = [14, 21, 33, 32, 53];
const favoriteThings = ['Books', 'Balls', 'Programming', 'Praying'];
const voters = [{ name: "hones", age: 12 }, { name: "Abraham", age: 22 }];
function getLastItem(value) {
    return value[value.length - 1];
}
console.log(getLastItem(gameScore), getLastItem(favoriteThings), getLastItem(voters));
//# sourceMappingURL=app.js.map