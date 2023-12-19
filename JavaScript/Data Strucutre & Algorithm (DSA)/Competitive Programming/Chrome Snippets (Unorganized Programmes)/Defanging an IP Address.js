//Leetcode: #1108 (Defanging an IP Address)
var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};
defangIPaddr("255.100.50.0");