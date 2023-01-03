//Leetcode: #200 (Number of Islands)


/**
 * @param {character[][]} grid
 * @return {number}
 */
/* Given:-
1. grid => (m x n) 2D binary Grid, which represents a map of '1's (island) and '0's (Water)
2. Return the number of islands
3. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

Note: 
    -- You may assume all four edges of the grid are all surrounded by water.
    -- Adjacect Island could be considered only verticle or horizontal in directions but not in diagonal. 
    -- Group of 1's would be consider as 1 island, if its adjacent islands are 1's as well. 
*/

/* Test Cases:-
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

/* Information:-
1. A 2D array(Arrays of an Array) is always a Matrix.
2. To traverse the whole matrix we always need a nested loop.
3. In 2D Array, the level-1 array(upper array), indicate the depth of the matrix. Depth of an Matrix form by No. of rows. So length of level-1 array gives the total 'Number of rows' in the matrix.
4.Similary, In 2D Array, level-0 arrays (lower/inside arrays), indicate the width of the matrix at each row. So lenght of level-0 arrays gives the total 'Number of columns' in the Matrix. Since, it gives no. of colums, So every arrays at level-0 will always have the same length.
*/

/* Appraoch_#1
1. We're going to start with the first cell of the matrix at (0,0) position;
    if we got '1'
        Increase the count++;
        Call a helper function called 'explore', which would going to explore adjacent things around the island we got in Horzonta & Vertical manner (Up, right, down, left) of the matrix grid;
   
   
   Explore Function:
    From the current found island (1's):
        //BASE CASE from the Recursion
        if(we get outofBound of Up row || get outofBound of 1st cell at each row || get outofBound of or reached at last cell of Matrix || get outofBound of or reached at last cell at each row || get "0" at the current cell or at any adjacent cell of current cell)
            just return nothing to the statement from where this function called and get move to the next cell or adj cell; 
        
        Now, turn the current cell / island ('1') to  '0'
            
    Now recursively call expolore funciton for every found current island at first sight to get to know about its adjacent things (either 1's or 0's) of the matrix grid.
    From the Stack:-
    For right position
        explore(row, col+1, grid)
    For left positon
        explore(row, col-1, grid)
    For Up position
        explore(row-1, col, grid)
    For Down position
        explore(row+1, col, grid)

2. return count;
*/
var numIslands = function(grid) {
    let count=0;
    
    for(let row=0; row<grid.length; row++){
        for(let col=0; col<grid[row].length; col++){
            //As we got the current cell as Island
            if(grid[row][col]==='1'){
                count++;
                explore(row, col, grid);
            }
        }
    }
    
    return count;
};

function explore(row, col, grid){
    
    //Base Case
    if( /* OutofBound of upper row*/ row<0 ||
        /* outOfBound from 1st cell of each row*/ col<0 ||
        /*outOfBoud or reached at the last cell of matrix*/ row>=grid.length ||
        /* outofBound from the last cell of each row*/ col>=grid[row].length ||
        /*If Adjacent cell of current cell got '0'*/ grid[row][col]==='0'
      )
    return ;    //returned nothing
    
    //Turn current island to water or '1' to '0'
    grid[row][col] = '0';
    
    //Recursively call explore from stack unitl each call doesn't satisfy the Base Case
    //To right
    explore(row, col+1, grid);
    //To left
    explore(row, col-1, grid);
    //To Up
    explore(row-1, col, grid);
    //To Down
    explore(row+1, col, grid);
}


















