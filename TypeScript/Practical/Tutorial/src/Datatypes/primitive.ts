//PRIMITIVE DATATYPES
let sales: number = 1234_456_6789;
let course: string = "TypeScript";

//We're free not to annotate datatypes
let is_published = true;

//if variable is not annotated it'll set to 'any' bydefault
//We should avoid using 'any' as much as possible
let any_varType;

function render(document:any) {
    console.log(document);
}