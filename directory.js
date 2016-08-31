var local = "";
var directory = {
        'classA': function(){ return require(local+'./classA')},
        'classB': function(){ return require(local+'./classB')},
};

var callFn = function(name){
    return directory[name]();
};

module.exports = callFn;