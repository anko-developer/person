(function() {
    // 'use strict';

    Function.prototype.method = function(name, func) {
        if (!this.prototype[name]) {
            this.prototype[name] = func;
        }
    };

    const Person = function(name) {
        this.name = name;

        if (!(this instanceof arguments.callee)) {
            return new arguments.callee(name);
        }
    };

    Person.method('make', (function() {
        let count = 0;
        
        return {
            plus: function() {
                ++count;
                return console.log(count);
                
            },
            minus: function() {
                --count;
                return console.log(count);
            }
        };
    })());

    const iam = new Person('명욱');

    iam.make.plus();
    iam.make.minus();
    
}());