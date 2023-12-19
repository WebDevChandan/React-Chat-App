var kthSmallest = function (matrix, k){
    var row = matrix.length;
    var col = matrix[0].length;
    var min = matrix[0][0];
    var max = matrix[row-1][col-1];
    var mid = 0;
    while(min<max){
        mid = Math.floor((min+max)/2);  //8
        var count = 0;
        for(var i=0;i<row;i++){
            for(var j=0;j<col;j++){
                if(matrix[i][j]<=mid){
                    count++;
                }
            }
        }
        if(count<k){
            min = mid+1;
        }
        else{
            max = mid;
        }
    }
    return min;
}
kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8);