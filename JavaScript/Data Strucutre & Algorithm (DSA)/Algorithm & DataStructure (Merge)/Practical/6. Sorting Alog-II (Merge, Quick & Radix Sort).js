//=================================== Merge Sort =========================
/*

//---- Merging Arrays Code ---------
function merge(arr1, arr2) {
    let i=0,
        j=0,
        result = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
        j++;
        }
    }

    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}


//---- MergeSort Code ---------

function mergeSort(arr) {
    if(arr.length<=1) return arr;
    
    let mid = Math.floor(arr.length/2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));

    return merge(left, right);

    
}
mergeSort([10,24,76,73]);
*/



//================================ Quick Sort =========================
/*

//Pivot Helper function
function pivot(arr, startIdx = 0, endIdx = arr.length-1){
    function swap(array, i, j) {
        let temp = array[i];    
        array[i] = array[j];   
        array[j] = temp;   
    }
    
    let pivot = arr[startIdx],   
        swapIdx = startIdx;      

    for (let i = startIdx+1; i < arr.length; i++) {
        if(pivot>arr[i]){        
            swapIdx++; 
            swap(arr, swapIdx,i);
        }            
    }
    swap(arr, startIdx, swapIdx);
    return swapIdx;
}

//QuickSort function
function quickSort(arr, left=0, right=arr.length-1) {
    if(left<right){
    let pivotIdx = pivot(arr, left, right);

    //Left
    quickSort(arr, left, pivotIdx-1);
    
    //Right
    quickSort(arr, pivotIdx+1, right);

    }
    return arr;
}

quickSort([4,6,9,1,2,5]);

*/



//=========================== Radix Sort =========================
/**/
function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10, i))%10;
}
function digitCount(num) {
    if(num ===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigitCount(nums){
    let maxDigit = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(nums[i]));
    }
    return maxDigit;
}

function radixSort(nums) {
    let maxDigitCount = mostDigitCount(nums);  // largest number of digits

    for (let k = 0; k < maxDigitCount; k++) {
        //Create 10 Empty Array upto k times.
        let digitBucket = Array.from({length:10}, ()=>[]);
        
        for (let i = 0; i < nums.length; i++) {
            //Getting Digit of Num at Kth position. For Ex: 2 at 0th position of 9852
            let digit = getDigit(nums[i], k);
            digitBucket[digit].push(nums[i]);
        }
        // console.log(digitBucket);
        //Get the sorted numbers from the digitBucket for every Iteration.
        nums = [].concat(...digitBucket);
        // console.log(nums);
    }

    return nums;
}
radixSort([23,345,5476,12,2345,9852]);





