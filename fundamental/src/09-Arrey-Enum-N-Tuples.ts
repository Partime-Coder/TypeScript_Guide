// declaration of arrey 

const gamelist: string[] = ["far cry 3", "Nioh"]
const gameprice: number[] = [599, 2999];
const rating: Array<number> = [4.5, 5.0];

type gameData = {
    name: string
    price: number
    addon: {
        name: string
        price: number
    }[]
}
const Data: gameData[] = [
    {
        name:"gta",
        price:1999,
        addon:[
            {
                name:"gtaOnline",
                price:2999

            }
        ]

    }
];

 const cities: readonly string[] = ["panvel", "pune"]
//  cities.push('mumbai') error

const table: number[][] = [
    [1,2,3],
    [4,5,6],
]

// tuple 
let gameTuple: [string, number]
gameTuple = ["hue",67] // in same order

let userTuple: [string,number,boolean?]
userTuple = ["sugal", 21]

const location: readonly [number, number] = [24.55,45.56]

// name tuple 
const items: [name:string, price:number] = ["bag", 446]


// enum

enum CupSize {
    small,
    medium,
    large
}

const size = CupSize.small

// enum problem
enum errorEnum {
    number = 100,
    name,  // 101
    age   // 102 auto asign increment value
}

// better dont assing or assign sting for example 

enum gameType {
    RPG = "rpg",
    SIMULATION = "simulation"
}

function getGame(type:gameType){
    console.log(type);
}
getGame(gameType.RPG)