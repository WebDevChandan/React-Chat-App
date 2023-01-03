//Leetcode: #1528 (Shuffle String)

var restoreString = function(s, indices) {
    // debugger
    let shfStr = [];

    for (let i = 0; i < indices.length; i++) {
        let a = indices.indexOf(indices[i]),
            b = indices.indexOf(a);
        shfStr.push(s[b]);
    }

    return shfStr.join('');
};
restoreString("codeleet", [4,5,6,7,0,2,1,3]);

/*
LOGIC:-
First, find Index No. (I1) of upcoming Element(a) of the Array, then find the 
index No. (I2) of another element(b), where (b) would be equal to the 
index No. of (a)

For Ex:
4 (a) --> 0 (I1)
(I1) = 0 (b)  --> 4 (I2)

s[b] = s[4] --> 'l',      This would be the first Character of the string, 
                          push into an empty array and Join to make it as
                          String.

*/