// ======================================================
// TYPE NARROWING USING typeof
// ======================================================

// data can be either string or number
function getData(data: string | number) {

    // typeof checks the runtime type
    // If data is string, TypeScript narrows its type to string
    if (typeof data === "string") {
        return `${data} is a string`;
    }

    // Otherwise TypeScript knows data must be number
    return `${data} is number`;
}



// ======================================================
// OPTIONAL PARAMETERS
// ======================================================

// msg is optional because of '?'
function getMsg(msg?: string): string {

    // If msg is undefined, null, or empty string
    if (!msg) {
        return `there is no msg send`;
    }

    // Here TypeScript knows msg exists
    return `message is: ${msg}`;
}



// ======================================================
// TYPE NARROWING USING instanceof
// ======================================================

class ProductData {
    fetchdata() {
        return `product data is fetch`;
    }
}

class UserData {
    fetchdata() {
        return `user data is fetch`;
    }
}

// data can be ProductData or UserData
function fetchApiData(data: ProductData | UserData) {

    // instanceof checks which class instance was passed
    if (data instanceof ProductData) {

        // Here data is narrowed to ProductData
        return data.fetchdata();
    }

    // Here data is narrowed to UserData
    return data.fetchdata();
}



// ======================================================
// CUSTOM TYPE GUARD
// ======================================================

// Custom object type
type UserDataType = {
    name: string;
    age: number;
    isAlive: boolean;
};


// Custom Type Guard Function
// "dataObj is UserDataType" tells TypeScript:
// If this function returns true,
// then dataObj should be treated as UserDataType.
function isUserData(dataObj: any): dataObj is UserDataType {

    return (
        typeof dataObj === "object" &&
        dataObj !== null &&

        typeof dataObj.name === "string" &&
        typeof dataObj.age === "number" &&

        // Correct property name is isAlive
        typeof dataObj.isAlive === "boolean"
    );
}



// ======================================================
// USING CUSTOM TYPE GUARD
// ======================================================

// data can be UserDataType or string
function sendUserData(data: UserDataType | string) {

    // Calls custom type guard
    if (isUserData(data)) {

        // TypeScript now knows data is UserDataType
        return `user data is ${data.name}, ${data.age}, ${data.isAlive}`;
    }

    // Otherwise TypeScript knows data is string
    return `user data ${data}`;
}