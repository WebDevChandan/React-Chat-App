//- By default, compiler makes function datatype as per return type.
//- But it'll always be a good practise to always annotate any function with proper datatype as per require return type
//- If we doesn't return anything, it's return type would be void.
//- Uncomment: "noUnusedParameters": true, to get warning message of unsed parameter;
//- By default, JavaScript always return undefined from a function.
//- Uncomment: "noImplicitReturns": true, Enable error reporting for codepaths that do not explicitly return
//- Uncomment: "noUnusedLocals": true, Enable error reporting when local variables aren't read (or not useing anywhere)

function calculateTax(income: number, taxYear=2022): number {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);