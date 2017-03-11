module.exports = {
  fizzBuzz : function(x){ 
    for (var i = 1; i <= x; i++){
      if (x % 15 === 0){
        return "FizzBuzz";
      }
      if (x % 3 === 0){
        return "Fizz";
      }
      if (x % 5 === 0){
        return "Buzz";
      }
      else{
        return x;
      }
    }
      
  }
}