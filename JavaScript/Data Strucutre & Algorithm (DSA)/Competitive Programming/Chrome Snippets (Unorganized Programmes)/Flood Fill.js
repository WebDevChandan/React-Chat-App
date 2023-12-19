//Leetcode: #733 (Flood Fill)
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// Note: This question is similar to the question (#200 'Number of Islands')

/* Given:-
1. image: mxn integer grid image, where, image[i][j] represent the pixel value of the image
2. sr, sc, color: Three integer
3. Perform flood fill on the image starting from the pixel image[sr][sc],
    where, sr & sc indicate indices means starting from 0.
4. To perform a flood fill, consider the starting pixel [sr][sc], plus any pixels connected 4-directionally (Horizontal & vertical i.e. right, left, Up & down) to the starting pixel of the same color(same integer value of the starting pixel) as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color (Given color Integer).
5. return the modified image after performing teh flood fill i.e. matrix.
*/

/* Test Cases:-
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color (integer).
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.
*/

/* Approach_#1:-
1. Create a 'strtPixVal' and initialize the value of starting Pixel.
2. Now, start exploring 4-direction (right, left, up, down) starting pixel of the image:
    IF(
        get outOfBound of upper extreme row ||
        get outOfBound of left extreme coloumn ||
        get outOfBound or reached at the last pixel of each row ||
        get outOfBount or reach at the last pixel of the image grid ||
        get any 4-direction of starting pixel not equal to its value
    )   
        then, just return nothing;
    
    Otherwise,
    keep changing its pixel's value and its adjacent pixels's value with the color

    //Recursively call the function to trace all the 4-direciton of starting pixel
    //For right
        floodFill(image, sr, sc+1, color);
    //For left
        floodFill(image, sr, sc-1, color);
    //For up
        floodFill(image, sr-1, sc, color);
    //For Down
        floodFill(image, sr+1, sc, color);
        
return image;        
*/


var floodFill = function(image, sr, sc, color) { //[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2
    let startPixVal = image[sr][sc]; //1

    //Edge Case
    if(startPixVal === color) return image;
        
    explore(image,sr,sc,color,startPixVal);
    
    return image;
    
};

function explore(image,sr, sc, color, startPixVal){
   
    if(sr<0 || sc<0 || sr>=image.length || sc>=image[sr].length || image[sr][sc]!==startPixVal)
        return;
    
    image[sr][sc] = color;

    //For right
        explore(image, sr, sc+1, color, startPixVal);
    //For left
        explore(image, sr, sc-1, color, startPixVal);
    //For up
        explore(image, sr-1, sc, color, startPixVal);
    //For Down
        explore(image, sr+1, sc, color, startPixVal);
}