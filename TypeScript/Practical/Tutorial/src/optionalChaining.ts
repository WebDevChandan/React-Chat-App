// Optional Chaining: For null or undefined checking

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// &. - Option property access operator 
console.log(customer?.birthday?.getFullYear());

//Option element access operator
//It is usefull when we're dealing with arrays
//customers?.[0]

//Optional Call operator
let log: any = null;
log?.('a');