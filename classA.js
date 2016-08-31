var resolve  = require('./directory');

var classA = function(){};

classA.prototype.Add = function(x,y){
    return x + y;
};

classA.prototype.MultiplyAndAdd2 = function(x,y){
    var tempInstance = new (resolve('classB'))();
    return this.Add(tempInstance.Multiply(x,y), 2);
};

module.exports = classA;


