function Vegetable(name, price) {
  this.name = name;
  this.price = price;
}

Vegetable.prototype.toString = function () {
  return this.name + ": " + this.price + " dollars";
};

var obj = new Vegetable();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log(prop + ": " + obj[prop]);
  }
}
var v1 = new Vegetable('cucumber', 2);
var v2 = new Vegetable('carrot', 1);

console.log(v1);
console.log(v2);
console.log( v1.toString() );

