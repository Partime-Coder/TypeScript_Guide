// Union Type 
// Assigning Multiple Type
let Balance: number | string | bigint = 0;

// Assigning Value
let apiResponseStatus : 'pending' | 'success' | 'failed' = 'pending'
// now apiResponseStatus has only three value that can be assign to it pending , success , failed.

// apiResponseStatus = 'error' -- Type '"error"' is not assignable to type '"pending" | "success" | "failed"'.

// Any Type

let alltype;
// or
let anytype:any = 0.56

alltype = "string"
alltype = 0;
alltype = false 

// there is undefined type as well .

