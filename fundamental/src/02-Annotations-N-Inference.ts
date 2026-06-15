// Type Inference -  TypeScript knows 
let name = "Sujal";
// Now is above line i did not wrote type for name variable still Typescript Inference its type gonna be string
// name = 23; Type 'number' is not assignable to type 'string' let name: string

let number = Math.random() > 0.5 ? 10 : '5' // this Inference all the possible type:- let number: string | number

// this can be done to all possible type in JS

// Type Annotations - Dev tell type 

let surname:string = "Bhagat" // in this line i told(Annotate) what type of surname can be.

let isAlive:boolean = true 
