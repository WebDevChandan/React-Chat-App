// LeetCode: #148  (Sort List)

/*
NOTE:-
Here, I'm using QUICK SORT Algorithm. 
Having,
Time Complexity at:
Best: O(nlogn)
Average: O(nlogn)
Worst: O(n^2)

Space Complexity is O(logn)
*/
function pivot(arr, startIdx =0, endIdx = arr.length-1 ){
    let pivot = arr[startIdx],
        swtIdx = startIdx;

    function swtich(array, i, j) {
        let temp  = array[j];
        array[j] = array[i];
        array[i] = temp;
    }

    for (let i = swtIdx+1; i < arr.length; i++) {
        if(pivot>arr[i]){
            swtIdx++;
            swtich(arr, swtIdx, i);
        }
    }
    swtich(arr, startIdx, swtIdx);

    return swtIdx;
}

var sortList = function(head, left=0, right= head.length-1) {

    if(left<right){
    pivotIdx = pivot(head,left, right);

        //Left
        sortList(head, left, pivotIdx-1);

        //Right
        sortList(head, pivotIdx+1, right);
    }
    return head;
    
};
sortList([]); 