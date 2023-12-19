var longestContinuousSubstring = function(s){
    let countArr = [], max =1;

    for (let i = 0; i < s.length; i++) {
        countArr.push(s[i].charCodeAt()-96);
    }

    let i =0, //3
        j=i+1, //4
        count = 0;
    
    while(i<countArr.length-1){                         //[1, 2, 1, 3, 1, 2, 1]

        //1 === 4
        if(countArr[j]===countArr[i]+1 ){
            j++;
            i++;
        }
        else{ 
            count +=1;
            j++;
            i++;
        }
    }

    max = (j-1) - count;
    return max;
}
// longestContinuousSubstring('abacaba');
longestContinuousSubstring('abcde');