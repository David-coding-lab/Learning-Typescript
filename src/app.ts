// **** SECTION TWO(2) Free Code Camp****

// Pizza Restaurant App
type Pizza = {
    name: string,
    price: number,
    id: number
}
 
type OrderQue = {
    pizza: string,
    status: Status,
    id: number
}

let nextPizzaId = 1
const menu: Pizza[] =[
    {name: "Margherita", price: 100, id: nextPizzaId++},
    {name: "Pepperent", price: 50, id: nextPizzaId++},
    {name: "Mawaiian", price: 10, id: nextPizzaId++},
    {name: "Veggie", price: 5, id: nextPizzaId++},
]

type Status = 'ordered' | 'completed'

let cashInTheRegister = 1000
let orderID = 1
const orderQue: OrderQue[] = [{
    pizza: 'Chilly pizza',
    status: 'ordered',
    id: orderID
}]
orderID++

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza{
    let newPizza: Pizza = {...pizza, id: nextPizzaId++}
    menu.push(newPizza)
    return newPizza
}

function addToArray<T>(array: T[], items: T){
    array.push(items)
    return array
}

addToArray(menu, {name: 'Holota', price: 20, id: 3})
addToArray<OrderQue>(orderQue, {pizza: 'Holota', status: 'completed', id: 3})

addNewPizza({name: 'Holota', price: 20})
addNewPizza({name: 'Fried Pizza', price: 20})
addNewPizza({name: 'Half done Pizza', price: 20})
console.log(menu)

function placeOrder(pizza: string): any{
    for (let i = 0; i > menu.length; i++){
        const index = menu[i]
        if (index?.name === pizza ){
            cashInTheRegister += index?.price ? index?.price : 0
            orderQue.push({
                pizza: index.name,
                status: "ordered",
                id: orderID
            })
            orderID++
            return orderQue
        }else
            return 'No Pizza with name found on the menu' 
    }    
}

function completeOrder(orderId: number){
    for (let i = 0; i > menu.length; i++){
        const order = orderQue[i]
        if (order?.id === orderId ){
            order.status = 'completed'
            return orderQue
        }else
            return 'No order with id found on the menu' 
    }   
    return 
}
console.log(completeOrder(1))


function getPizzaDetails(identifier: string | number): Pizza | undefined{
    if (typeof identifier === 'string')
        return menu.find(pizza => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
    else if(typeof identifier === 'number')
        return menu.find(pizza => pizza.id === identifier)
    else
        return 
}

console.log(getPizzaDetails('margherita'))





































type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

let person1: Person = {
    name: 'Dace',
    age: 19,
    isStudent: false
}

let person2: Person = {
    name: 'dave',
    age: 14,
    isStudent: true
}

const persons: Person[] = [
    person1, person2
]







type Roles = 'admin' | 'guest' | 'buyer'

type User = {
    id: number,
    name: string,
    role: Roles
}
type NewUser = Partial<User>

let newUserId = 1
const users: User[] =[
    {id: 1, name: 'joseph', role: 'admin'},
    {id: 2, name: 'johnny', role: 'buyer'},
    {id: 3, name: 'andrew', role: 'guest'},
] 

function updateUser(id: number, updates: NewUser): void{
    let result = users.find(userData => userData.id === id)
    if (result)
        Object.assign(result, updates)
}

function addNewUser(newUser: Omit<User, "id">): User{
    let user: User = {...newUser, id: newUserId++}
    users.push(user)

    return user
}

addNewUser({name: 'dave', role: 'guest'})
updateUser(1, {name: 'danny'})

console.log(users)

const gameScore = [14, 21, 33, 32, 53]
const favoriteThings = [ 'Books', 'Balls', 'Programming', 'Praying']
const voters = [{name: "hones", age: 12}, {name: "Abraham", age: 22}]

function getLastItem<ValueType>(value: ValueType[]): ValueType | undefined{
    return value[value.length -1]
}

console.log(
    getLastItem(gameScore),
getLastItem(favoriteThings),
getLastItem(voters),
)



// First Curriculums done
// What I Learned

// 1. Basic, literals, and custom types
// 2. Optional properties
// 3. Unions
// 4. Type Narrowing
// 5. Utility Types
// 6. Generics
