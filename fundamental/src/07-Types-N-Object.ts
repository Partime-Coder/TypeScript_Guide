// everything about handling Object in ts 

const User = {
    name:"Sujal",
    age: 21,
    isCool: true
}
// behind the sence ts always infer the types of object mean 
// {
//     name: string;
//     age: number;
//     isCool: boolean
// }

let person: {
    name: string;
    age: number;
    isCool: boolean
}
person = {
    name: "Sujal",
    age: 21,
    isCool: true
}
// alist object of type if word is correct?
type human = {
    name: string;
    age: number;
   traits: string[];
}

const myself: human = {
    name: "Sujal",
    age:21,
    traits:["cool", "chill"]
}

// duck type - if look like and walk like its a duck 

type bottle = {litter : string} 
let smallbottle: bottle = {litter:"500ml"}
let bigbottle = {litter: "1000ml", material:"steel"}

smallbottle = bigbottle;

// no issue due to it satisfy the bare minimum property

// some good practice
type item={name:string, quantity:number};
type address={street:string, pin:number};

type order ={
    id:string,
    item:item[],
    address:address,
}

// now some intresting methods for using type

type game = {
    name:string,
    age:number
}

// partial access 

function update(data: Partial<game>) {
    console.log('updating game with', data);
};

update({age:13})

// partial property make all type optional , one issue with this that it allow empty object to pass that will cuz problem
// update({}) // this give no error 

// Required
function updateAll(data:Required<game>) {
    console.log(data);
}
updateAll({
    name:"watchdog2",
    age:10,
})

// this will also make option value with ? also required

// Pick 

function setName(data:Pick<game,"name">) { // can add union and more property
    console.log(data);
}
setName({name:'sleeping dog'})
// we can pick which data we needed only and will not give error 

// one more is omit rarely use opposite of pick will exlude the value 
function getage(data:Omit <game, 'name'>) {
    console.log(data);   
}
getage({age:42})
// getage({name}) //Object literal may only specify known properties, and 'name' does not exist in type 'Omit<game, "name">'.