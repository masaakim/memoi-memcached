
var memoi = require('memoi');
var memcached = require('memoi-memcached');

var fibonacci = memoi(function(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n -2);
}, memcached);

fib_10 = fibonacci(10); // 55

memcached.get('fib_10'); // 55
