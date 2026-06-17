// class user {
//     name:string;
//     age:number;

//     constructor(name:string, age:number){
//         this.name =name;
//         this.age = age
//     }
// }

// const user1 = new user("suhal", 45)
// user1.name = "raj"

class game {
    public name: string = "gta"
    private creator: string = "someone"

    reveal() {
        return this.creator
    }
}

const g = new game()
g.reveal

class shop {
    protected name: string = "BMS"
}
class branch extends shop {
    getName() {
        return this.name
    }
}

new branch().getName

// private can be wrote with # and typescipt support it 

// readonly property

class APIKey {
    readonly key: string = "abc123"
    constructor(key: string) {
        this.key = key
    }
}

// control gates 

class Balance {
    private Balance = 1000

    get balance() {
        return this.Balance
    }

    set balance(value: number) {
        if (value < 0) {
            throw new Error("nooo")
        }
        this.Balance = value
    }
}

const b = new Balance()
b.balance = 45

// static

class user {
    static name = "sujal"
    constructor(public bio: string) {
    }
}

//abstact
abstract class drink {
    abstract make():void
}
// Non-abstract class 'lemonade' does not implement inherited abstract member make from class
class lemonade extends drink{
    make(){
        console.log("lemon");
        
    }
}

//composition

class Heater{
    heat(){}
}

class water{
    constructor(private heater: Heater){}
    make(){
        this.heater.heat
    }
}