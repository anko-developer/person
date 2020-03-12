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
}());