(function(){
    'use strict';
    
    function foo() {
        console.dir(this);
    }
    foo(); // 함수호출 = window / undefined

    let obj = {
        foo: foo
    }
    obj.foo(); // 메소드 호출 = object

    let instance = new foo(); // 생성자 함수 호출 = foo

    let kim = { // call, apply, bind = object
        name : 'wook'
    }
    foo.call(kim);
    foo.apply(kim);
    foo.bind(kim)();
}());


(function() {
    //'use strict';
    let value = 1;
    let obj = {
        value: 100,
        foo: function() {
            //let that = this;
            console.log('foo this: ', this);
            console.log('foo value: ', this.value);
            function bar(a, b) {
                console.log('bar this: ', this);
                console.log('bar value: ', this.value);

                //console.log('bar that: ', that);
                //console.log('bar value: ', that.value);
                
            }
            //bar();
            bar.call(obj, 1, 2);
            bar.apply(obj, [1, 2]);
            bar.bind(obj)(1, 2);
        }
    }
    obj.foo();
}());

(function(){
    //'use strict';
    function Person(arg) {
        if (!(this instanceof arguments.callee)) {
            return new arguments.callee(arg);
        }

        this.value = arg ? arg : 0;
    }

    var test1 = new Person(100);
    var test2 = Person(10);

    console.log(test1.value);
    console.log(test2.value);
    
}());