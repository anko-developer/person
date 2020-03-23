(function() {
    //'use strict';
    Function.prototype.method = function(name, func) {
        // 생성자 함수의 프로토타입에 동일한 이름의 메소드가 없으면 생성자함수의 프로토타입에 메소드를 추가
        // this: 생성자함수
        if(!this.prototype[name]) {
            this.prototype[name] = func;
        }
    };

    const Person = function(name) {
        this.name = name;

        if(!(this instanceof arguments.callee)) {
            return new arguments.callee(name);
        }
    };

    Person.method('say', (function() {
        let num = 0; // 자유변수

        return function(predicate) {
            num = predicate(num);
            return this.name + '가 ' + num + '번 짖었다.';
        }
    }()));

    Person,method('plus', function(n) {
        return ++n;
    });
    Person,method('minus', function(n) {
        return --n;
    });

    const dog = new Person('Anko'); // 우리집 강아지 이름 

    console.log(dog.say(dog.plus)); // Anko가 1번 짖었다.
    console.log(dog.say(dog.plus)); // Anko가 2번 짖었다.
    console.log(dog.say(dog.minus)); // Anko가 1번 짖었다.
}());
