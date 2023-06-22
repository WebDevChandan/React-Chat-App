// With Union Type, we can give a variable or a  function parameter more than one type
//Using Verticle Bar we can create Union type

function kgToLbs(weight: number | string): number {

    //At this point, we don't know what would be the exact type of weight.
    //Hence, we'll now get the properties or method of weight that would be common in between number & string.
    //Now we're going to use a technique called "Narrowing". So, gonna narrow down  this union type into more specific type.
    
    if (typeof weight === 'number')
        //Now as we do "weight with periods" i.e. (weight.) we'll get all number methods 
        return weight * 2.2;
    else
        //Now as we do "weight with periods" i.e. (weight.) we'll get all string methods
        return parseInt(weight) * 2.2;
}

//Now we, can call this function in two way. Either with Number or string
kgToLbs(10);
kgToLbs('10kg');
