// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

function fizzBuzzer(n) {
  function createTag(parent, child, value, classy) {
    var parent = document.querySelector(parent);
    var child = parent.appendChild(document.createElement(child));
    var value = child.innerHTML;
    if(typeof classy !== "undefined") {
      var classy = child.classList.add(value);
    }
  }


  function check(n) {
    var msg = '';
    if ( n % 3 == 0 ) { msg += "fizz" };
    if ( n % 5 == 0 ) { msg += "buzz" };
    return msg || n;
  }
    if(n > 0) {
      createTag(".panel", "div", check(n), check(n));
    }
}