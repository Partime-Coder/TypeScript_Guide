interface game {
    name:string;
    price:number;
    played?:boolean
}

const GTA:game={
    name:'GTA5',
    price:1999,
}

interface user {
    readonly id:number 
    name:string
}
const s:user = {
    id:2,
    name:"sujal"
}



interface PriceCalculate {
(price:number):number
}
const apply50: PriceCalculate = (p) => p * 0.5




interface machine {
    start():void;
    stop():void;
}

const teaMachine: machine = {
    start() {
        console.log("start");
        
    },
    stop() {
        console.log("stop");
        
    },
}
// index signature usualy avoid look confused
interface rating {
    [name:string]:number
}
const gamesRate : rating = {
    gta:5,
    farcry:7

}




interface User {
    name:string
}

interface User {
    age:number
}

const u:User = {
    name:"sujal",
    age:32
}

// how to do manually 

interface A {a:string}
interface B {b:string}

interface C extends A, B {}

// ---------------------------------------------------
// Generics

function wrapInArray<T>(item:T):T[] {
    return [item]
}

wrapInArray("Name");
wrapInArray(32);
wrapInArray({
    name: "Matin",
    age: 23
});


function pair <A,B>(a:A , b:B):[A,B]{
    return [a,b]
}

pair("34343", 43434)

// all data can get genaral function mostly use in libary

// generic interfacr 

interface Box<M> {
    content: M
}

const numberBox: Box<number> = {content:18}
const StringBox: Box<string> = {content:"18"}

// real world use in api respomse or  from react form