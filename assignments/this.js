/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global - When the value of "This" is attached globally.
* 2. Implicit - Whenever a function is called by a dot. The object to the left of the dot is what "This" is referring to.
* 3. new binding - When a constructor function is used this refers to the instance of the object that is created
*4. explicit - Whenever JavaScript’s call or apply method is used, this is explicitly defined.

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHey(name){
    console.log(this)
    return name;
}
sayHey('Terrell')

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Whats up?',
    sayWhatsUp: function(name) {
      console.log(`${this.greeting} My name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayWhatsUp('Terrell');
// Principle 3

// code example for New Binding
function student(name) {
    this.action = 'raised their hand ';
    this.student = name;
    this.raiseHand = function() {
      console.log(`${this.student}, ${this.action}`);
      console.log(this);
    };
  }

  const terrell = new student('Terrell')
  terrell.raiseHand();


// Principle 4

// code example for Explicit Binding
//Parent Constructor
function Parent(attributes){
    this.age = attributes.age;
    this.location = attributes.location;
    this.name = attributes.name;
    this.phrase = attributes.phrase;
  }
  
  Object.prototype.speak = function(){
    return (`${this.phrase}`)
  }

  //New child constructor
  function Child(attributes){
      //explicit biding
    Parent.call(this, attributes)
      this.play = attributes.play
  }

  let kiddo1 = new Child({
      age: '1month',
      location: 'Oakland',
      name: 'Koah',
      play: 'Plays with feet',
      phrase: 'Goooo Gooo'
  })

  console.log(kiddo1.speak());
  console.log(kiddo1.name);

