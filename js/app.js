// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
function fizzBuzzer(total) {
  var n = 1
  function createTag(parent, child, value, classy) {
    var parent = document.querySelector(parent);
    var child = parent.appendChild(document.createElement(child));
    var value = child.innerHTML = value;
    if(typeof classy !== "undefined") {
        var classy = child.classList.add(value);
    }

  };
  function check(n) {
    var msg = '';
    if ( n % 3 == 0 ) { msg += "fizz" };
    if ( n % 5 == 0 ) { msg += "buzz" };
    return msg || n;
  }

  for (n; n <= total; n++) {
    createTag(".panel", "div", check(n),check(n));
  }
}
fizzBuzzer(100);

