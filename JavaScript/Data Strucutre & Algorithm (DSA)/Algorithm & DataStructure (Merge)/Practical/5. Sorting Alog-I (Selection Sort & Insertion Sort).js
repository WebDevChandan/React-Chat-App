//===================================== Selection Sort =========================
/*

function selectionSort(arr){
  // debugger
    for(let i=0; i<arr.length; i++){
        let tempMin = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if(tempMin>arr[j]){
                tempMin = arr[j];
                noSwap = false;
            }
        }
        let temp = arr[i];
        arr[arr.indexOf(tempMin)] = temp;
        arr[i] = tempMin;        
        
    }
    return arr;
}
selectionSort([1,2,3,5,4]);
// selectionSort([32,27,10,2,-8,50]);
// selectionSort([0,2,10,17,19,22,34]);


//=== 2nd way ====
// LEGACY VERSION (non ES2015 syntax)
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            console.log(i, lowest);
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}


selectionSort([1,2,3,5,4]);
// selectionSort([32,27,10,2,-8,50]);

*/



//===================================Insertion Sort =========================
/*

function insertionSort(arr){
    
    for(var i=1; i<arr.length; i++){
        let currentVal = arr[i];
        for(var j=i-1; j>=0 && arr[j]>currentVal; j--){
            arr[j+1] = arr[j];
        }
    
        arr[j+1] = currentVal;                          //here we defined j with var instead of let.     
    }
    return arr;
}
insertionSort([1,2,3,5,4]);
*/
