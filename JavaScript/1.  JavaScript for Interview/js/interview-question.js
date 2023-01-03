function outerFunc(a) {
  function adder(b) {
    console.log(a + b);
  }
  return adder;
}
var getForFour = outerFunc(4);
var getForTwentySeven = outerFunc(27);
getForFour(10);
getForTwentySeven(10);
