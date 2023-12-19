// Convert Number to Words

/* Test Cases:-
I/P: 123   | Output: One Hundred Twenty Three
I/P: 5492  | Output: Five Thousand Four Hundred Ninety Two

    Constrants:-
    0 <= n <10000
*/

/* 1st Approach:-
1. Convert Number to numbers of array
2. Store length of array to 'length' & declare an 'result' array. 
3. Create a wordNum10 Object;
    Store word of Numbers from [0-9] & [11-19]
    
   Create another wordNum20 Object;
    Store word of Numbers from [20-90]

4. Start a loop from i=0 to <arr.length

   if('length'===3)
     result.push(wordNum10[arr[i]]);
     result.push('Hundred');
     length--;

    if(length ===2)
     result.push(wordNum20[arr[i]]);
     length--;

    result.push(wordNum10[arr[i]]);

5. return result;
*/


function numToWords(num) {
    //Convreting Number into an Array of Numbers;
    const arr = num.toString().split('').map((s)=> Number(s));
    
    let length = arr.length, result=[],
        wordNum1 = {
            1: 'One',
            2: 'Two',
            3: 'Three',
            4: 'Four',
            5: 'Five',
            6: 'Six',
            7: 'Seven',
            8: 'Eight',
            9: 'Nine',
        },
        wordNum2 ={
            1: 'Eleven',
            2: 'Twelve',
            3: 'Thirteen',
            4: 'Fourteen',
            5: 'Fivteen',
            6: 'Sixteen',
            7: 'Seventeen',
            8: 'Eighteen',
            9: 'Nineteen',
        },
        wordNum20 = {
            1: 'Ten',            
            2: 'Twenty',
            3: 'Thirty',
            4: 'Fourty',
            5: "Fifty",
            6: "Sixty",
            7: 'Seventy',
            8: 'Eighty',
            9: 'Ninety',
        }

    //Edge Cases:-
    if(arr.length===1 && arr[0]===0) return 'Zero';
    
    if(num>=10000) return 'Number should be less than 10,000';

    
    for (let i = 0; i < arr.length; i++) { //1234
        if(length===4 && arr[i]!==0){
            result.push(wordNum1[arr[i]]);
            result.push('Thousand');
            length--
        }
        else if(length===3 && arr[i]!==0){
            result.push(wordNum1[arr[i]]);
            result.push('Hundred');
            length--
        }
        else if(length===2 && arr[i]!==0 && (arr[i]>=1 && arr[i+1]===0)){
            result.push(wordNum20[arr[i]]);
            break;
        }else if(length===2 && arr[i]!==0 && (arr[i]>=2 && arr[i+1]!==0)){
            result.push(wordNum20[arr[i]]);
            length--;
        }else if(length===2 && arr[i]!==0 && (arr[i]===1 && arr[i+1]!==0)){
            result.push(wordNum2[arr[i+1]]);
            break;
        }else if(arr[i]!==0){
            result.push(wordNum1[arr[i]]);
        }
        else length--;
        
    }

    return result.join(' ');
}

numToWords(111);