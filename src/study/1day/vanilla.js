// function Person(name) {
//     this.name = name;
// }

// var foo = new Person('wook');

// Person.prototype.sayHello = function() {
//     console.log(this.name + '하이!');
// }

// foo.sayHello();

(function() {
    function Person(name) {
        this.name = name;
    }
    
    var foo = new Person('김명욱');

    Person.prototype.sayHello = function() {
        var mySelf = '안녕하세요? ' + this.name + ' 입니다.';
        return (() => {
            console.log(mySelf);
        })();
    }
    
    foo.sayHello();
}());