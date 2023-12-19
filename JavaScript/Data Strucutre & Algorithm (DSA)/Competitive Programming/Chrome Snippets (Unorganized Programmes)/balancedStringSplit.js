//Leetcode: #1221 (Split a String in Balanced Strings)

var balancedStringSplit = function(s) {
    let rCounter=0,   //5
        lCounter=0,   //5
        Counter =0;   //4

    for (let i = 0; i < s.length; i++) {
        if(s[i]==='R') rCounter++;
        else
            lCounter++;
        
        if(rCounter===lCounter)
            Counter++;
    }
    return Counter;
};

balancedStringSplit("LLLLRRRR");

/*
LOGIC:-
1. Loop over the String
2. 'R' --> rCounter++ = 1
3. 'L' --> lCounter++ = 1
4. Since, rCounter === lCounter
5. Counter++ = 1
6. return Counter;
*/