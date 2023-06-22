// Enums: A list of related constants
//Example:-
// const small = 1;
// const medium = 2;
// const large = 3;
/*In Enum, we basically follow PascalCase
By default, compiler implicitly set value as: {0, 1, 2}*/
// enum Size{ Small, Medium, Large }
//String enum.  All memebers should be either implicitly or Explicitly setted their value(if it's other than number)
// enum Size { Small = 's', Medium = 'm', Large = 'l' }
//Explicitly setting value to this enum.
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var mySize = Size.Medium;
console.log(mySize);
