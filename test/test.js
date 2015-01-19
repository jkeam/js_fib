var should    = require('chai').should();
var Fib       = require('../src/fib');

describe('Fib', function(){
  var unsorted = [22, 14, 85, 23, 1, 7, 9, 10, 36];
  var sorted   = [1, 7, 9, 10, 14, 22, 23, 36, 85];

  beforeEach(function(){
    unsorted = [22, 14, 85, 23, 1, 7, 9, 10, 36];
  })

  describe('fib', function(){
    it('should calculate for 1', function(){
      var fib = new Fib();
      var actual = fib.solve(1);
      actual.should.to.equal(1);
    })

    it('should calculate for 8', function(){
      var fib = new Fib();
      var actual = fib.solve(8);
      actual.should.to.equal(21);
    })

    it('should calculate for 14', function(){
      var fib = new Fib();
      var actual = fib.solve(14);
      actual.should.to.equal(377);
    })
  })

})
