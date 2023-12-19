//------------------FIND NUMBER OF DUPLICATES-----------

// function fnDuplicate(arr) {
//     // debugger
//     let map = {},
//         newArr = [],
//         count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(!map[arr[i]]){
//             map[arr[i]] = 1;
//             newArr.push(arr[i]);
//             }
//         else
//             map[arr[i]] +=1;
//     }
    
//     for (let j = 0; j < newArr.length; j++) {
//         if(map[newArr[j]]>1)
//         count++;
//     }
    
//     return count;
// }
// fnDuplicate([11,2,3,6,1,2,4,3,99, 6]);




//=============== Using SET method ========
// function fnDuplicate(arr) {
//    let set = new Set(arr),
//     newArr = Array.from(set);

//    if(newArr.length!==arr.length)
//        return true;
//     return false;
// }
// fnDuplicate([1,2,3,4,5]);