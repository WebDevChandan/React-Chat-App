// Codingame.com

let arr =  ['up', 'up', 'right', 'down', 'left'];
let hasMap = {},
    str = '';
const controller = {
    up: '^',
    right: '>',
    down: 'v',
    left: '<'
}
for(let i=0; i<arr.length; i++){
    if(!hasMap[arr[i]])
        hasMap[arr[i]] = 1;
    else
        hasMap[arr[i]] += 1;     
}

for(let key in hasMap){
    if(hasMap[key]===1){
        str+=(controller[key]);
    }else
        str+=(controller[key]+hasMap[key]);
}

console.log(str);
