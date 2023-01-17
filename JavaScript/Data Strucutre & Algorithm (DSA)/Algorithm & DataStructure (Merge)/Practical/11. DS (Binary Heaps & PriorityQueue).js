// ==================================== ⭐Insert in MaxBinaryHeap⭐ ====================

/* Visualization:-

                    41 (1)
                   /   \
             (2) 39     33 (3)
                /  \   /  \
              18   27 12
            (4)    (5) (6)
array: [41, 39, 33, 18, 27, 12]

Insert(55):
                    41
                   /   \
                 39     33
                /  \   /  \
              18   27 12   55   <-- Adding

                    41
                   /   \
                 39     55      <-- Bubbling
                /  \   /  \
              18   27 12   33   

                    55          <-- Bubbling
                   /   \
                 39     41
                /  \   /  \
              18   27 12   33   
array: [55, 39, 41, 18, 27, 12, 33]

Insert(32):
                    55
                   /   \
                 39     41
                /  \   /  \
              18   27 12   33
             /
            32                  <-- Adding
                    55
                   /   \
                 39     41
                /  \   /  \
              32   27 12   33   <-- Bubbling
             /
            18
                   
array: [54, 39, 41, 32, 27, 12, 33, 18]
*/


/* Approach:-
-- Keep in mind, 
    - MaxBinaryHeap means Parent node always be Greater than Child node.
    - Inserting an element in maxBinaryHeap tree, will begin by adding as the last node (leaf node) of the tree. Since, we're pushing newNode to the array.
    - We're going to arrange MaxBinaryHeap tree in Array Data Structure. Means, New element will be added at the beginning of array.
    - In array, To find parent of any Inserted node, we'll use floored value of (n-1)/2. It will give the index of its parent element.

-- Push new Element to the array.

-- Start bubblingUp the Element with its above parent in the tree.

-- Store index of new Element in 'idx' and Store value of new Element in 'element' variable.

-- Start a Loop till 'idx' of inserted Element <= 0
    - Store index of Parent Element of inserted element in 'parentIdx' and Store value of parent Element in 'parent' variable.
    - Check, if (inserted 'element' is smaller than its 'parent') break the loop, return the array.
    - Otherwise, Start Swapping:
        - At index of Inserted Element <-- Set Parent Element 
        - At index of Parent Element <-- Set Inserted Element
        - Assign 'parentIdx' to the 'idx' of Inserted Element    (As Inserted element moving Up along the tree, started acquiring index of parent Element, which lead in the decrement of it 'idx') 


class MaxBinaryHeap {
    constructor() {
        this.value = [41, 39, 33, 18, 27, 12];
    }

    insert(element){
        this.value.push(element);
        const showMaxBinaryHeap = this.bubbleUp();
        return showMaxBinaryHeap;
    }

    bubbleUp(){
        let idx = this.value.length-1;
        const element = this.value[idx];

        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            const parent = this.value[parentIdx];
            if(element<=parent) break;
            
            //Start Bubbling Up (Swapping)
            this.value[idx] = parent;
            this.value[parentIdx] = element;
            idx = parentIdx;
        }
            return this.value;
    }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(55);

*/



// ==================================== ⭐Remove (ExtractMax) in MaxBinaryHeap⭐ ====================
/* Visualization:-

                    41 (1)
                   /   \
             (2) 39     33 (3)
                /  \   /  \
              18   27     12 
            (4)    (5)    (6)
array: [41, 39, 33, 18, 27, 12]

extractMax():
                                <-- Removed Max Value
                   /   \
                 39     33
                /  \      \
              18   27     12   

        sinkDown--> 12           
           ⬇       /   \
           ⬇     39     33
                /  \      \
              18   27      

                    39           
                   /   \
    sinkDown-->  12     33
        ⬇       /  \      \
        ⬇     18   27      

                    39           
                   /   \
                 27     33
                /  \      \
              18   12      
array: [39, 27, 33, 18, 12]
*/

/* Approach:-
-- Store a maxBinaryHeap into an Array or List

-- ExtractMax: In maxBinaryHeap heap Parent is always > Child. So root will always be the Greatest Element in maxBinaryHeap at the end. This is what we've to Remove or say Extract i.e. why it's called ExtractMax.

-- Store root Element to 'max' and Pop out the last element from the array (means, minimum value node of MaxBineary heap) and store it in 'end' variable.

-- If (length of array or say MaxBinaryHeap is Greater than 0 then only we can perform extractMax or Remove Operation on Maximum Element)
    -- Set the 'End' Element at the root of BinaryHeap. (This will cause removal of Old Root or Maximum Element from the Tree.)
        This is how remove Operaition has complete. Now we've to arrange current Binary Tree in such a way that will look like a Valid MaxBinaryHeap.

-- Start sinkingDown or say Bubbling Down. 
    -- Assign 0 to 'idx' variable. This would be the index of  current root Element that moveout from last to top in BinaryHeap.
    -- Store that current root Element to an 'element' variable and current length of the array or current depth of BinaryHeap into 'length' variable.

    -- Start a loop.
        -- Store index of left Child of 'element' into 'leftChildIdx'(2n+1) & right Child into 'rightChildIdx'(2n+2).
        -- Declare 'LeftChild' & 'RightChild' variable and Initialize 'swap' variable with null. (this swap will furhter help in terminating the loop). 
        -- store left & right Child of current 'element' into 'LeftChild' & 'RightChild' variable.

        -- If(leftChildIdx<length of array) //To avoid getting out of boundary in order for searching child of current 'element' accross the array/tree.
            if(current element < its LeftChild) --> Assign leftChildIdx to 'swap' variable.

        -- If(rightChildIdx<length of array) //To avoid getting out of boundary in order for searching child of current 'element' accross the array/tree.
            if(swap===null && current element < its RightChild || swap!==null && RightChild>LeftChild) --> Assign rightChildIdx to 'swap' variable.

        -- If (swap === null) break out of the loop.

        -- Start Swapping of current 'element' with its child
            Set current 'element' at the index of its child element's index
            Set child Element at the index of its parent element's or say current 'element''s index

*/
// class MaxBinaryHeap {
//     constructor() {
//         this.value = [41,39,33,18,27,12];
//     }

//     extractMax(){
//         const max = this.value[0],
//             end = this.value.pop();
//         if(this.value.length>0){
//             this.value[0] = end;
//             this.sinkDown();
//             console.log(`maxExtractedValue: ${max}, Final Arranged MaxBinarHeap: [${this.value}]`);
//             }
//     }

//     //BubblingDown or say sinkDown
//     sinkDown(){
//         let idx = 0,
//             element = this.value[0],
//             length = this.value.length;

//         while(true){
//             let leftChildIdx = 2*idx +1,
//                 rightChildIdx = 2*idx +2,
//                 LeftChild, RightChild,
//                 swap = null;
//              LeftChild = this.value[leftChildIdx];
//              RightChild = this.value[rightChildIdx];
                 
//             if(leftChildIdx<length){
//                 if(element<LeftChild){
//                     swap = leftChildIdx;
//                 }
//             }
//             if(rightChildIdx<length){
//                 if(swap===null && RightChild>element || swap!==null && RightChild>LeftChild){
//                     swap = rightChildIdx;
//                 }
//             }

//             if(swap===null) break;

//             this.value[idx] = this.value[swap];
//             this.value[swap] = element;
//             idx = swap;
//         }
//     }
// }

// let maxBinaryHeap = new MaxBinaryHeap();
// maxBinaryHeap.extractMax();




// ==================================== ⭐ PRIORITY QUEUE ⭐ ====================
/* Visualization:-

                    Hi (1)
                   /   \
             (2) There   This (3)
                /  \       \
              Is   Chandan      
            (4)    (5)    

array: ["Hi", "There", "This", "Is", "Chandan"]


Approach:-
-- Info: 
    - Lower Number means Higher priority. Hence we're going to use MinBinary Heap.
    - Every Element/Node has some priority value associated with it. 
    - Element with higher Priority are served before elements with lower priorities.
    - Here, value doesn't matter, MinHeap is constructed & arranged Elements using Priority.

-- First we need to construct MinBinary Heap in array representation  
    - 1st adding Node (consisting value associated with Priority) to the value Property i.e. an empty array of class PriorityQueue. This method is called enqueue. 
    - 2nd After adding Each Node, we need to arrange that node in such a way to build a MinHeap.

-- Second, we need to get the Element/Node having Highest Priority i.e. the node having value associated with minimum Priority (the root of MinHeap).
    - Since, Our MinBinary Heap is represented in an Array. So to extract the minimum priority value node/element from the array/MinHeap, we'll perform Dequeue Operation.
    - Then, Arrange all the rest elements in heap as to form an another MinBinaryHeap.

// Code Implementation
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.value = [];
    }
    // Adding to create MinBinary Heap
    enqueue(value, priority){
        let newNode = new Node(value, priority);
        this.value.push(newNode);
        this.bubbleUp();
        // return this.value;
    }

    // Bubbling to adjust as MinBinary Heap
    bubbleUp(){
        let idx = this.value.length-1,
            element = this.value[idx];

        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2),
            parent = this.value[parentIdx];
            if(element.priority >= parent.priority) break;

            this.value[parentIdx] = element;
            this.value[idx] = parent;
            idx = parentIdx;
        }
    }

    // Removing from MinBinary Heap
    dequeue(){
        const min = this.value[0],
            end = this.value.pop();
        if(this.value.length>0){
            this.value[0] = end;
            this.sinkDown();
            }
        return min;
    }

    //BubblingDown or say sinkDown to adjust as MinBinary Heap
    sinkDown(){
        let idx = 0,
            element = this.value[0],
            length = this.value.length;

        while(true){
            let leftChildIdx = 2*idx +1,
                rightChildIdx = 2*idx +2,
                LeftChild, RightChild,
                swap = null;

                 
            if(leftChildIdx<length){
                LeftChild = this.value[leftChildIdx];
                if(element.priority > LeftChild.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx<length){
                RightChild = this.value[rightChildIdx];
                if(swap===null && RightChild.priority<element.priority || swap!==null && RightChild.priority<LeftChild.priority){
                    swap = rightChildIdx;
                }
            }

            if(swap===null) break;

            this.value[idx] = this.value[swap];
            this.value[swap] = element;
            idx = swap;
        }
    }
}


let priorityQueue = new PriorityQueue();

// For Input: 
priorityQueue.enqueue("This",3);
priorityQueue.enqueue("Chandan",5);
priorityQueue.enqueue("There",2);
priorityQueue.enqueue("Hi",1);
priorityQueue.enqueue("is",4);

// For Output: To get the Highest Priority Element/Node as per Calling of dequeue();
priorityQueue.dequeue();

*/



//====================== Naive(Unoptimized) Priority Queue ================
/*
// CODE IMPLEMENTATION:-
class PriorityQueue {
  constructor(){
    // work as the visited array
    this.values = [];
  }
  enqueue(val, priority) {
      // Going to accept value along with their Priority Order. 
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
      // dequeue the Lowest priority first.
    return this.values.shift();
  };
  sort() {
      // Going to sort each value according to their priority. Lowest priority will come at lower index number. Like we usually sort numbers of an array.
    this.values.sort((a, b) => a.priority - b.priority);
  };
}
*/