module.exports = function() {
  var memo = {};

  var fibWithMemo = function(n) {
    if (n <= 1) {
      return n;  
    } else {
      var val = memo[n]; 
      if (!val) {
        val = fib(n-1) + fib(n-2);
        memo[n] = val;
      }
      return val;
    }
  }

  var fib = function(n) {
    if (n <= 1) {
      return n;  
    } else {
      return fib(n-1) + fib(n-2);
    }
  }

  this.solve = function(n) {
    return fibWithMemo(n);
  }
}
