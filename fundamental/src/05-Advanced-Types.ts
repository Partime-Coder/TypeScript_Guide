// Type Assertion 
let response: any = "54"
let nemericLength: number = (response as string).length

// response is any type but when used that response to nemericLength which is 
// number will not have all the string method due to calling in number type so we use as 
// string type assertion mean take it as string.

type game = {
    name:string;
}

let gameString = '{"name":"Far Cry 3"}';
let gameObject =JSON.parse(gameString) as game;

console.log(gameObject.name);  // when assertion custom type now this object as the access of game type.


const inputElement = document.getElementById("username") as HTMLInputElement;

// type Assertion for unkown
const data:unknown = "name"
// const dataStr: string = data // this will give error 'dataStr' is declared but its value is never read.
// we can overpass this with same assertion
const dataStr : string = data as string;


// Unkown 
// Unkown vs Any 

let UnkownValue : unknown 

UnkownValue = "name"
UnkownValue = 43
UnkownValue = [2,3,4]
// UnkownValue.toUpperCase()  // this will give error due to unknown what first to check value before using value

let anyValue : any 

anyValue = "name"
anyValue = 43
anyValue = [2,3,4]
anyValue.toUpperCase()  // this will not give error in idle but give error in runtime.


// Try Catch Problem

try {
    
} catch (error) {
    // console.log(error.message); // this like will get error due to typescript does not know what value of error 
    
}

try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("error is:", error);
    
}

//Never Type

type role = "admin" | "user"

function redirectBaseOnRole(role:role) :void {  // side note:- void data type mean i dont return anything or i dont care what i return.
    if (role === 'admin') {
        console.log("redirect to admin page");
        return
    }
    if (role === 'user') {
        console.log("redirect to user page");
        return
    }
    
    // all possible value has been handle

    role; // when hover we see role type or parameter is never due to all possible value are handle so this sould not exist here.
    // type role = "admin" | "user" | "manager"
    // suppose added another type then role will help to identify whats left then parameter type will be what not handle 

};

// another case

function neverReturn():never {
    while(true){}
}

// this is function that will never return anything cuse it naver stop