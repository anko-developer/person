(function(){
    //'use strict';
    /**
     * 더글라스 크락포드가 제안한 프로토타입에 객체에 메소드를 추가하는 방법
     * 모든 생성자함수의 프로토타입은 Function.prototype 이다,
     * 따라서 Function.prototype.method()에 접근 할 수 있음.
     */
    
    const btn = document.getElementById('inclease');
    const box = document.getElementById('count');

    Function.prototype.method = function(name, func) {
        // 생성자함수의 프로토타입에 동일한 이름의 메소드가 없으면 생성자함수의 프로토타입에 메소드를 추가함.
        // this: 생성자함수
        if(!this.prototype[name]) {
            this.prototype[name] = func;
        }
    };

    var Person = function(name) {
        this.name = name;

        if(!(this instanceof arguments.callee)) {
            return new arguments.callee(name);
        }
    }

    Person.method('up', (function(){
        let counter = 0;
        return function() {
            ++counter;
            return this.name + counter;
        }
    }()));

    // Person.prototype.up = (function() {
    //     let counter = 0;
    //     return function() {
    //         ++counter;
    //         return this.name + counter;
    //     };
    // }());

    var me = new Person('wook');

    btn.onclick = function() {
        count.innerHTML = me.up();
    };



    
    // [프로토타입 패턴 상속] - Object.create 는 IE 9이상에서만 정상 작동하여 크로스브라우징에 주의해야한다.
    //  부모생성자함수
    var Parent = (function() {
        // Constructor
        function Parent(name) {
            this.name = name;
        }
        Parent.prototype.sayHi = function() {
            console.log('Hi! ' + this.name);  
        };

        // return constructor
        return Parent;
    }());

    var child = Object.create(Parent.prototype);
    child.name = 'wook';
    child.sayHi();
    console.log(child instanceof Parent); // true
    
    var parent = {
        name: 'parent',
        sayHi: function() {
            console.log('Hi! ' + this.name);
        }
    };

    // create 함수의 인자는 객체다.
    var child = Object.create(parent);
    child.name = 'wook';
    
    parent.sayHi();
    child.sayHi();
    console.log(parent.isPrototypeOf(child)); // true


    // IE 9이상에서만 정상 작동하는 Object.create 함수의 폴리필
    // Polyfill: 특정 기능이 지원되지 않는 브라우저를 위해 사용할 수 있는 코드 조각이나 플러그인
    if (!Object.create) {
        Object.create = function(o) {
            //  비어있는 생성자함수 F를 생성한다.
            function F() {}

            // 생성자함수 F의 prototype 프로퍼티에 매개변수 전달받은 객체를 할당
            F.prototype = o;

            // 생성자함수 F를 생성자로 하여 새로운 객체를 생성하고 반환한다.
            return new F();
        };
    }
}());