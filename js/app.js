!function() {
  'use strict';

  function FizzBuzzer(id) {
    this.$slider = document.getElementById(id);

    this.$slider.addEventListener('change', this.onChange.bind(this), true);
  }

  FizzBuzzer.prototype.check = function(value){
    var msg = '';
    if ( value % 3 == 0 ) { msg += "fizz" };
    if ( value % 5 == 0 ) { msg += "buzz" };
    return msg || value;
  }

  FizzBuzzer.prototype.contain = function(value) { // Set CLASS TAG within this function here (...and maybe fizzbuzzIt?)
    // this.$mainContainer = document.querySelector('.panel');
    // this.$childTab = this.$mainContainer.appendChild(document.createElement('div'));
    // this.$value = this.$childTab.innerHTML = value;
    // this.$childTab.classList.add(check(this.$value));
  }

  FizzBuzzer.prototype.destroy = function(){
    this.$slider.removeEventListener('change', this.onChange);
    // this.$mainContainer.removeChild(this.$mainContainer.lastChild);
  }

  FizzBuzzer.prototype.onChange = function(event) {
    var number = event.currentTarget.value;
    var res = [];

    for (var i = 1; i < number; i++) {
      res.push(this.check(i));
    }

    // TODO Write to DOM.
    console.log(res.join("\n"));
  }

  // Instance
  var fizzbuzzer = new FizzBuzzer('fizzbuzzer');
}();
