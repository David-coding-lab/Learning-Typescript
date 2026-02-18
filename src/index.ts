let age: number = 10;
// this (☝️☝️ age: number ) is called annotation. we annotated age to be a number

// Debugging lesson
if (age < 50 )
    age += 10;

console.log(age)


// Section 2
// BUILt IN TYPES OF TYPESCRIPT
// ****

// 1. Arrays - type
// 2. Tuples - type
// 3. Enums - type
// 4. Functions - type 
// 5. Objects - type
//  6. ANY - type

// ****

// JAVASCRIPT    ||     TYPESCRIPT 

// Number               Any
// String               Unknown
// Boolean              Never
// Null                 enum
// Undefined            tuple
// Object


// *****The Any Type******
// this represents any type of variable. eg. let level: any;
// this is not advisable when using typescript it's best to annotate variables with semantic types.
let level: any;
level = 2
level = 'string'
console.log(level)


// ******The Array Type******
let number: number[] = [];

number[0]= 3
// if i try to assign a value that the type is not set to ill get am error eg. number[1] = 'string'


// ******The Tuple Type******
// this is a fixed length array where each element has a particular type.
let user: [number, string] = [2, 'string']
console.log(user)
// if i try to interchange or add any other value aside from what is declared in the type annotation i get an error
// user = ['hey', 2]. error: Type 'string' is not assignable to type 'number'.

// ****** The Enums Types******
// These are a list of related contents. it's written in Pascal Casing eg. HelloWorld
const enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium

console.log(mySize)

// ******The Functions Types******

function calculateTask(income: number, taxYear: number): number {
    if(taxYear < 2022)
        income * 1.2
    return income * 1.3
}
console.log(calculateTask)


// ******The Object Type******
//typescript makes us define the content types of our object before initializing any value
// look at the object bellow 👇👇 i did not define the content of the object so if i try to modify this object i get an error. see line 77 
let employee: object = {}
console.log(employee)
// trying to initialize an undefined key resulting to an error
// employee.id = ['001']
// this is a good example of how objects are correctly defined in Typescript

let employees: {
    name: string,
    readonly id: number,
    readonly role: string,
    retirementPlan: (date: Date) => string
} = {
    name: '',
    id: 0,
    role: 'worker',
    retirementPlan: (date)=>{return `This employee will retire on the  += ${date}`}
}

console.log(employees)

// the readOnly tells typescript that the variable is read only and it should not allow us to edit it


// Advance Type

// 1. Type Aliases

type Employees = {
    name: string,
    readonly id: number,
    readonly role: string,
    retirementPlan: (date: Date) => string
}

let employeeData: Employees = {
    name: 'dana',
    role: 'Cleaner',
    retirementPlan: (date)=>{return `This employee will retire on the  += ${date}`},
    id: 0
}
console.log(employeeData)
// this makes types definition easier and neater to work with


// 2. Union Types
// this allows you to give a variable different types

function kgToLbs(weight: number | string): number{
// Narrowing
if (typeof weight === "number")
    return weight * 2.2
else 
    return parseInt(weight) * 22
}

console.log(kgToLbs)

// Type Intersection
// this allows you to combine two types to one variable

type Draggable = {
    drag: ()=> void
} 

type Resizable = {
    resize: ()=> void
}

type UiWidget = Draggable & Resizable

let UiWidgetApp: UiWidget = {
    drag() {
        return '0.2'
    },
    resize() {
        return 2.5
    },

}
console.log(UiWidgetApp)

// Literal Types
// This helps us limit the values we can assign to a variable

let hisName: 'jonny' = 'jonny'

type Quantity = 50 | 100
let goods: Quantity = 50

console.log(goods, hisName)

// Nullable Types
function greet(name: string | null | undefined): string{
    if (name)
        return name.toUpperCase()
    else
        return 'Hola'
}

greet('Dave')

// Optional Chaining    
// This helps use the optional property access operator
function makeReceipt(customerName: string, transactionId: number): {message: string, date: Date, goodsType: string} | undefined | null {
    return customerName && transactionId !== undefined ? {
        message: `Transaction Receipt( txt ${transactionId}) total is summed bellow`,
        date: new Date,
        goodsType: 'Grocery'
    } : null 
}

console.log(makeReceipt('Andrew Bay', 1003342)?.message)
// the (?) operator allows us to chain conditions so our code doesn't break unintentionally











