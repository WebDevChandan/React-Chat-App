//Leetcode: #1996 (The Number of Weak Characters in the Game)

/**
 * @param {number[][]} properties
 * @return {number}
 */

/*
    Given:-
1. There is a Game having no. of characters.
2. All characters having 2 properties i.e. Attact & Defense
3. Charcters along with their properties stored in a 2D array called 'properties'.
    Their may or may not be any weak character/s
4. A ith character is said to be weak, iff there exists another character 'j' where     attact(j) > attact(i) and defense(j) > defense(i)
5. Return the number of weak characters.

Note: 
2 <= properties.length <= 105
properties[i].length == 2
1 <= attacki, defensei <= 105


    Test Cases:-
Input: properties = [[5,5],[6,3],[3,6]]
Output: 0
Explanation: No character has strictly greater attack and defense than the other.

Input: properties = [[2,2],[3,3]]
Output: 1
Explanation: The first character is weak because the second character has a strictly greater attack and defense.

Input: properties = [[1,5],[10,4],[4,3]]
Output: 1
Explanation: The third character is weak because the second character has a strictly greater attack and defense.

Input: properties = [[1,5],[10,4],[4,3],[10,8],[4,9],[1,5],[1,10],[2,9]]
Output: 3
Explanation: The fourth character[10, 8] is strictly stronger than 3 weak characters [1,5], [4, 3], [1,5] in terms of attack and defencse.

Input: properties = [[7,9],[10,7],[6,9],[10,4],[7,5],[7,10]]
Output: 2


    Logic for Approach_#1:-
1. Since, here a character is said to be weak if, its attack and defense both should be weaker/lesser than some other character. 
    Or Say
   A character is said to be strong if, its attack and defense both should be stronger/greater than other characters.
  
2. If we sort all the characters in descending order of Attack, & if attack is same sorting should be in assending order of defense then we only need to care about defense. That's it.   

3. As we sort all the character in decreasing order of Attack, Now just loop over all the characters.
    While traversing, we'll be getting current charcter having stroger attack than the next character.
    So, now just check those character having weaker defense than the previous character's defense, just Increase weakCharacterCount by 1.
    Otherwise, keep updating stronger defense in max variable.
    

    Approach_#1:- [T.C: O(nlogn) & S.C: O(1)]
1. Create variables 'max' & 'weakCharCount' and both initialize with 0.
2. sort the 2D properties array in decreasing order of Attack & if attack is same sorting should be in assending order of defense. (Using in-built sort method having T.C: O(nlogn)) 
3. Loop over teh properties array
    if(character's defense < max) weakCharCount++;
    else 
    (Update max with stronger defense of character)
        max = charcter's defense;
4. return weakerCharCount++;


    Visualization:-
    Ex: [[1,5],[10,4],[4,3],[10,8],[4,9],[1,5],[1,10],[2,9]]
    max= 0, 
    Sorting: [ [ 10, 4 ], [ 10, 8 ], [ 4, 3 ],  [ 4, 9 ], [ 2, 9 ],  [ 1, 5 ], [ 1, 5 ],  [ 1, 10 ]]
             char[1]<max char[1]<max char[1]<max char[1]<max 
*/


//CODE IMPLEMENTATION: (Approach_#1):-
var numberOfWeakCharacters = function(properties) { //[[7,9],[10,7],[6,9],[10,4],[7,5],[7,10]]
    let max = 0, //7
        weakCharCount = 0; //1
    
    properties.sort((a,b)=>(a[0]===b[0])?a[1]-b[1]:b[0]-a[0]);
    // [ [10, 4], [10, 7], [7, 5], [7, 9], [7, 10], [6, 9] ]
    
    
    for(let char of properties){
        //4<7
        if(char[1]<max) weakCharCount++;
        else
            max = char[1];
    }
    
    return weakCharCount; //0
};