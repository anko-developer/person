(function() {
    // 'use strict';

    Function.prototype.method = function(name, func) {
        if (!this.prototype[name]) {
            this.prototype[name] = func;
        }
    };

    const App = function(name) {
        this.name = name;

        if (!(this instanceof arguments.callee)) {
            return new arguments.callee(name);
        }
    }

    // let object = {
    //     name: '명욱',
    //     age: 33
    // }
    // let x, y = ({name: x, age: y} = object);
    // console.log(x);
    
    // let {a, b, c = 3} = {a: "1", b: "2"};
    // console.log(c);
    
    // 프로퍼티명을 동적으로 조합 할 경우 표현식을 [] 로 감싼다.
    let {['first' + 'name'] :x } = {firstname: '김명욱'};
    console.log(x);
    
    // 객체 속 객체의 프로퍼티는 다음과 같이 추출
    let {name, otherInfo: {age}} = {name: '욱', otherInfo: {age: 33}};
    console.log(age);
    
    // 파라미터로 객체해체 할당 사용
    function iam ({name = '앙꼬', age = 2, job = 'dog'} = {}) {
        console.log(name, age, job);
    }
    iam({name: '명욱킴', age: 33});
    
    
    let arrow = (say, name) => console.log(name + say);
    arrow('안녕하세요', '김명욱님 ');
}());