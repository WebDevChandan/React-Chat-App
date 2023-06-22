//ARRAY:-
//Like Js, we can also specify multiple datatypes in an single array in TS
let num1 = [1, 2, '3'];

//But in TS, by annotating variable to single array datatypes we can only specify single datatypes in the array.
let num2: number[] = [1, 2, 3];
let num3 = [1, 2, 3];
let num: number[] = [];

//any array datatypes
let num4 = [];