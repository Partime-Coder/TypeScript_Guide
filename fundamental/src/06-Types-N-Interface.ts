// Interface and classes

// until now we were handling custom type withs type but there is another way which is interface

type example = {
    name:string;
    age:number
}
function forExample(data:example) {
    return data;
}

// we can handle with class as well

type game = {
    name:string;
    relaseDate:number
    played: boolean
}

// class gameClass implements game {
// 'gameClass' is declared but never used
// Class 'gameClass' incorrectly implements interface 'game'.
//   Type 'gameClass' is missing the following properties from type 'game': name, relaseDate)
// }
class gameClass implements game {
    name ="gtaV";
    relaseDate = 2013;
    played = true;
}

// now with litreal value

type gameType = "open world" | "RPG"

// class typeClass implements gameType {
// Error: A class can only implement an object type or intersection of object types with statically known members
// }

// for this we need interface

interface GameType {
    type: "open world" | "RPG";
}

class typeClass implements GameType {
    type: "open world" | "RPG" = "open world";
}

// this case also not allow for union type examp;e
type response = {ok:true} | {ok:false};

// -------------------------------------------------------------------------

// now few concept quickly 

// type intersection

type gameName = {name:string};
type gameAge = {age:number};

type gameAllType = gameName & gameAge

const GtaV: gameAllType = {
    name:"gtaV",
    // Property 'age' is missing in type '{ name: string; }' but required in type 'gameAge'.
    age:13,
}

// this is when all propety is requred to assign

type userData = {
    name:string
    bio?:string
}
// in this case bio is option so if assign or not does not matter will not give error

// readOnly value

type Config = {
    readonly AppName:string
    version : 1
}

const conf: Config = {
    AppName: "BMS Store",
    version: 1
}

// conf.AppName = "BMS Blog" //Cannot assign to 'AppName' because it is a read-only property.
// this will give error due to it readonly property but it need to set first time