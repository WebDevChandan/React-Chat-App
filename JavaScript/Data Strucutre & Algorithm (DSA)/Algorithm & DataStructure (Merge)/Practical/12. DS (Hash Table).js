// ================================= Basic Hash Function =============================
/* Note:Every Character has numeric value associated with it, and you can actualy access that.
    "a".charCodeAt(0).
    0 is the Index that corresponds to the Zero Index of the String.

    "a".charCodeAt(0) - 96
    If we substract with 96, it will give the aplhabatic ranking/position.
*/

// function hash(key, arrayLen) {
//     let total = 0;
//     for (let char of key) {
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//         return total;
// }


// Improvement of the Above Code using Prime Number
// function hash(key, arrayLen) {
//     let total=0, primeNum = 31;

//     for (let i = 0; i < Math.min(key.length,100); i++) {
//         let char = key[i],
//             value = char.charCodeAt(0) - 96;
//         total = (total*primeNum + value) % arrayLen;
//     }

//     return total;
// }
// hash("cyan", 13);
// hash("pink", 13);





// ================================= Hash Table SET to implement Separate Chaining =============================
/* Approach:
-- We're going implement hashTable in an array and implement set() method to store keys & their corresponding values in hashMap at some index and for dealing with collision we’ll use Separate Chaining.
    Due to Separate Chaining, data/element would be > length of array.

-- Create an array of Size(let say, 4) store it in 'keyMap'

-- Create a hash function called '_hash' which are going to accept key and return the random index number inside array (keyMap) to store that key.

-- To push the previous key along with a value in 'keyMap' and deal with collision we're going to Create a 'set' Method.
    Empty keyMap of size(4) --> ['', '', '', '']

    call hash function '_hash' to get the index of key and store that index to 'index' variable.

    If(there is no key present at that particular index or say empty)
     Just create an empty Array at that index 
     Empty array created at index[2] --> ['', '', '[]', '']

    Otherwise (if there is something at that index of keyMap)
     Just push the key and value in the form of an array. 
     Empty array created at index[2] --> ['', '', '[[key,value]]', '']
*/

// class HashTable {
//     constructor(size = 4) {
//         this.keyMap = new Array(size);
//     }

// _hash(key){
//         let total = 0,
//         primeNum = 31;

//         for (let i = 0; i < Math.min(key.length, 100); i++) {
//             let char = key[i],
//                 value = char.charCodeAt(0) - 96;
//             total  = (total* primeNum+value)%this.keyMap.length;
//         }
//         return total;
//     }

//     set(key, value){
//         let index = this._hash(key);
        
//         if(!this.keyMap[index]){
//             // Set it to an empty array
//             this.keyMap[index] = [];
//         }
//         this.keyMap[index].push([key, value]);
//     }
// }

// let hashtable = new HashTable();
// hashtable.set('hello world', 'goodbye!!');
// hashtable.set('dogs', 'are cool');
// hashtable.set('cats', 'are fine');
// hashtable.set('i love', 'pizza');
// hashtable.set('hi', 'bye');
// hashtable.set('french', 'fries');
//           (  key,     value)

/*
Output:-
HashTable {keyMap: Array(4)}
    keyMap: Array(4)                                   //Total size of the keyMap --> 4
    0: [Array(2)]                                      //At O index, there is 1 array of size(2).
    1: (3) [Array(2), Array(2), Array(2)]              //At 1 index, there is 3 array of size(2). This is called collision
    2: [Array(2)]
    3: [Array(2)]
    length: 4

Separate Chaining:
Total length of keyMap --> 4
Total element/data present in keyMap --> 6
*/






// ================================= Hash Table GET to get value of key =============================
/* Approach:
-- We're going implement hashTable in an array and get the value of the key. Ex: Key ('yellow'): value ('#FFFF00') 
    Here, All keys along with their corresponding values has already been stored in the hashtable using 'set()' Method.

-- Create an array of some Size(let say, 17) store it in 'keyMap' 

-- Now to get the value of a particular key, we're going to call 'get(key)' method by passing the required key.
    Store the index of the required key in 'index' variable    
    Check, If(their is any element found in keyMap at that index? this.keyMap[index])
        If Found,
            So, their might be presence of multiple array(consisiting multiple element/data) due to collision
            Here, Start looping over the array(might consisiting multiple array) at that index till its length. < this.keyMap[index].length
                if(We got the key(that would be at the 0th index of any array)===key)
                    return the value of that particular key (that would be at the 1st index of that array.)
    If Not Found,
        return undefined.
*/

// class HashTable {
//     constructor(size=17) {
//         this.keyMap = new Array(size);
//     }

// _hash(key){
//         let total = 0,
//         primeNum = 31;

//         for (let i = 0; i < Math.min(key.length, 100); i++) {
//             let char = key[i],
//                 value = char.charCodeAt(0) - 96;
//             total  = (total* primeNum+value)%this.keyMap.length;
//         }
//         return total;
//     }

//     set(key, value){
//         let index = this._hash(key);
        
//         if(!this.keyMap[index]){
//             // Set it to an empty array
//             this.keyMap[index] = [];
//         }
//         this.keyMap[index].push([key, value]);
//     }
    
//     get(key){
//         //hash the key (Getting the index of the key)
//         let index = this._hash(key);
        
//         // Check is there something at that index
//         if(this.keyMap[index]){
//             // return this.keyMap[index] the table containing key (Might be consisiting multiple arrays)
//          for(let i=0; i<this.keyMap[index].length; i++){
//              if(this.keyMap[index][i][0]===key){
//                  //return only the value of given key at particular index.
//                  return this.keyMap[index][i][1];
//              }
//          }
//         }
//         return undefined;
//     }
// }

// let hashtable = new HashTable();
// hashtable.set('maroon', '#800000');
// hashtable.set('yellow', '#FFFF00');
// hashtable.set('olive', '#808000');
// hashtable.set('salmon', '#FA8072');
// hashtable.set('lightcoral', '#FA8080');
// hashtable.set('mediumvioletred', '#C71585');
// hashtable.set('plum', '#DDa0DD');
//           (  key,     value)

/*
Output:-
HashTable {keyMap: Array(17)}
keyMap: Array(17)
    0: [Array(2)]
    3: [Array(2)]
    8: Array(2)
        0: (2) ['maroon', '#800000']
        1: (2) ['yellow', '#FFFF00']
    10: [Array(2)]
    13: [Array(2)]
    16: [Array(2)]
length: 17

// To execute get() method
hashtable.get('yellow');                                                  //value of key ('yellow'): '#FFFF00'
'#FFFF00'
hashtable.get('plum');                                                  //value of key ('plum'): '#DDa0DD'
'#DDa0DD'
hashtable.get('red');                                                  //value of key ('red'): undefined, there is no red.
undefined
*/






// ================================= Hash Table SET to implement Separate Chaining =============================
/* Approach:
-- We're going implement hashTable in an array and implement set() method to store keys & their corresponding values in hashMap at some index and for dealing with collision we’ll use Separate Chaining.
    Due to Separate Chaining, data/element would be > length of array.

-- Create an array of Size(let say, 4) store it in 'keyMap'

-- Create a hash function called '_hash' which are going to accept key and return the random index number inside array (keyMap) to store that key.

-- To push the previous key along with a value in 'keyMap' and deal with collision we're going to Create a 'set' Method.
    Empty keyMap of size(4) --> ['', '', '', '']

    call hash function '_hash' to get the index of key and store that index to 'index' variable.

    If(there is no key present at that particular index or say empty)
     Just create an empty Array at that index 
     Empty array created at index[2] --> ['', '', '[]', '']

    Otherwise (if there is something at that index of keyMap)
     Just push the key and value in the form of an array. 
     Empty array created at index[2] --> ['', '', '[[key,value]]', '']
*/

// class HashTable {
//     constructor(size = 4) {
//         this.keyMap = new Array(size);
//     }

// _hash(key){
//         let total = 0,
//         primeNum = 31;

//         for (let i = 0; i < Math.min(key.length, 100); i++) {
//             let char = key[i],
//                 value = char.charCodeAt(0) - 96;
//             total  = (total* primeNum+value)%this.keyMap.length;
//         }
//         return total;
//     }

//     set(key, value){
//         let index = this._hash(key);
        
//         if(!this.keyMap[index]){
//             // Set it to an empty array
//             this.keyMap[index] = [];
//         }
//         this.keyMap[index].push([key, value]);
//     }
// }

// let hashtable = new HashTable();
// hashtable.set('hello world', 'goodbye!!');
// hashtable.set('dogs', 'are cool');
// hashtable.set('cats', 'are fine');
// hashtable.set('i love', 'pizza');
// hashtable.set('hi', 'bye');
// hashtable.set('french', 'fries');
//           (  key,     value)

/*
Output:-
HashTable {keyMap: Array(4)}
    keyMap: Array(4)                                   //Total size of the keyMap --> 4
    0: [Array(2)]                                      //At O index, there is 1 array of size(2).
    1: (3) [Array(2), Array(2), Array(2)]              //At 1 index, there is 3 array of size(2). This is called collision
    2: [Array(2)]
    3: [Array(2)]
    length: 4

Separate Chaining:
Total length of keyMap --> 4
Total element/data present in keyMap --> 6
*/






// ================================= Getting all keys and their respective values from hashMap =============================
/* Approach:
-- We need to get all the keys and their values from the hashMap i.e. 'keyMap'
    We need to avoid getting duplicates keys & values from the keyMap

-- values()
-- To get all values from 'keyMap', avoiding duplicates, we'll call values()
    First, create an empty called 'valuesArr'
    Start a loop till the length of keyMap (<this.keyMap.length)
        IF(Their is something(element/data in the form of array) at any index then only, enter this block for that index)
            Start second loop over the array found at that index, till the length of the array at that index. (<this.keyMap[i].length)
            Check, If(the value we're getting from keyMap doesn't already exited in 'valuesArr', !valuesArr.includes(this.keyMap[i][j][1]))
                Since, the value is unique, just push it to valuesArr.

-- return valuesArr;


-- keys()
-- To get all keys from 'keyMap', avoiding duplicates, we'll call keys()
    First, create an empty called 'keysArr'
    Start a loop till the length of keyMap (<this.keyMap.length)
        IF(Their is something(element/data in the form of array) at any index then only, enter this block for that index)
            Start second loop over the array found at that index, till the length of the array at that index. (<this.keyMap[i].length)
            Check, If(the key we're getting from keyMap doesn't already exited in 'keysArr', !keysArr.includes(this.keyMap[i][j][0]))
                Since, the key is unique, just push it to keysArr.

-- return keysArr;
*/

class HashTable {
    constructor(size=17) {
        this.keyMap = new Array(size);
    }

_hash(key){
        let total = 0,
        primeNum = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i],
                value = char.charCodeAt(0) - 96;
            total  = (total* primeNum+value)%this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        
        if(!this.keyMap[index]){
            // Set it to an empty array
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    
    get(key){
        //hash the key (Getting the index of the key)
        let index = this._hash(key);
        
        // Check is there something at that index
        if(this.keyMap[index]){
            // return this.keyMap[index] the table containing key (Might be consisiting multiple arrays)
         for(let i=0; i<this.keyMap[index].length; i++){
             if(this.keyMap[index][i][0]===key){
                 //return only the value of given key at particular index.
                 return this.keyMap[index][i][1];
             }
         }
        }
        return undefined;
    }

    values(){
        let valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // if the values doesn't already includes in valuesArr. (To get unique values, if duplicates exist)
                    if(!valuesArr.includes(this.keyMap[i][j][1]))
                        valuesArr.push(this.keyMap[i][j][1]);
                }
            }
        }
        return valuesArr;
    }

    keys(){
        let keysArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0]))
                        keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArr;
    }
}

let hashtable = new HashTable();
hashtable.set('maroon', '#800000');
hashtable.set('yellow', '#FFFF00');
hashtable.set('olive', '#808000');
hashtable.set('salmon', '#FA8072');
hashtable.set('lightcoral', '#FA8080');
hashtable.set('mediumvioletred', '#C71585');
hashtable.set('plum', '#DDa0DD');
hashtable.set('plum', 'duplicatePlum');
hashtable.set('purple', '#DDa0DD');
//           (  key,     value)

/*
Output:-
hashtable.values();
(8) ['#DDa0DD', 'duplicatePlum', '#FA8072', '#800000', '#FFFF00', '#808000', '#FA8080', '#C71585']

hashtable.keys();
(8) ['plum', 'salmon', 'purple', 'maroon', 'yellow', 'olive', 'lightcoral', 'mediumvioletred']
*/

