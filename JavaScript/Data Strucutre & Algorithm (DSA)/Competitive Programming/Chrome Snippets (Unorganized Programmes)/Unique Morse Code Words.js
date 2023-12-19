// Leetcode: #804 (Unique Morse Code Words)

var uniqueMorseRepresentations = function(words) {
  const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let alphaMorseCode = [];

    for (let i = 0; i < words.length; i++) {
        let str = '';
        for (let j = 0; j < words[i].length; j++) {
            let alphabetIdx = words[i][j].charCodeAt() - 97;
            str += morseCode[alphabetIdx];
        }
        alphaMorseCode.push(str);
    }

    const transformations = new Set(alphaMorseCode);
    return Array.from(transformations).length;
};
// uniqueMorseRepresentations(["gin","zen","gig","msg"]);
