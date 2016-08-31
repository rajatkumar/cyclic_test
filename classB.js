var resolve  = require('./directory');
var _ = require('lodash'); // just like that

var classB = function(){};

classB.prototype.Multiply = function(x,y){
    return x * y;
};

classB.prototype.Add2AndMultiply = function(x,y){
    var tempInstance = new (resolve('classA'))();
    return this.Multiply(tempInstance.Add(x,2), tempInstance.Add(y,2));
};

module.exports = classB;

