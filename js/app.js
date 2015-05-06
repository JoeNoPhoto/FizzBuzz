// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

/*window.onload = function() {SliderState(1);}; // Should I just do SliderState(1)? I'm having trouble initializing the first value from within SliderState() itself....*/

function SliderState(value) {
  this.$storedValues = [],
  this.$totalValue = [],
  this.$fromValue,
  this.$toValue;
  this.$contain = function(value) { // Set CLASS TAG within this function here (...and maybe fizzbuzzIt?)
    this.$mainContainer = document.querySelector('.panel');
    this.$childTab = this.$mainContainer.appendChild(document.createElement('div'));
    this.$value = this.$childTab.innerHTML = value;
    this.$childTab.classList.add(check(this.$value));
  };
  this.$destroy = function(){
    this.$mainContainer.removeChild(this.$mainContainer.lastChild);
  };

  function check(value){
    var msg = '';
    if ( value % 3 == 0 ) { msg += "fizz" };
    if ( value % 5 == 0 ) { msg += "buzz" };
    return msg || value;
  };
  (function addem() {  // (function(){}); wrapped in parenthesis so that it runs without prompting.
    this.$toValue = value;
    if(!this.$fromValue) {
      this.$fromValue = 1;
    };
    if(this.$fromValue < this.$toValue) {
      for(this.$fromValue; this.$fromValue < this.$toValue; this.$fromValue++) {
        this.$storedValues.push(check(this.$fromValue));
      }
      for(var i=0, j=this.$storedValues.length; i < j; i++) { //'length caching' = fastest loop. Good to know.
        this.$contain(this.$storedValues[i]);
      }
    };
  })();

  (function takem() {
    if(value < this.$fromValue) {
      for(this.$fromValue; this.$fromValue > value; this.$fromValue--){
        this.$totalValue.push(this.$fromValue);
      }
      for(var i=0, j=this.$totalValue.length; i < j; i++) { //'length caching' = fastest loop. Good to know.
        this.$destroy();
        this.$totalValue.pop();
      };
    }
  })();
};