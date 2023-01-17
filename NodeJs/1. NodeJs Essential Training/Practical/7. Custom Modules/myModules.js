let count = 0;

const inc = () => ++count,
    dec = () => --count,
    getCount = () => count;


module.exports = {
    anything: true,
    who: "Bill", 
    count, 
    inc, 
    dec, 
    getCount
}