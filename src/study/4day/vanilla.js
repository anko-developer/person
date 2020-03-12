(function(){
    'use strict';

    function outerFunc() {
        var x = 10;
        var innerFunc = function() {
            console.log(x);
        }
        return innerFunc;
    }

    var inner = outerFunc();
    inner();

    /**
     * outerFunc는 반환되고 끝났지만 x에 접근 가능하다.
     * 이유는 실행컨텍스트를 생각해보면 된다.
     * innerFunc의 Scope chain에서 outerFunc의 Activation object에 chain 되어있기 때문에 참조가 가능하다.
     * outerFunc가 종료되면 outerFunc의 실행컨텍스트는 소멸하지만 
     * outerFunc의 Activation object는 유효하다.
     */






    //ex 1)
    var box = document.querySelector('.box');
    var toggleBtn = document.querySelector('.toggle');
    var toggle = (function(){
        var state = false;

        return function() {
            box.style.display = state ? 'block' : 'none';
            state = !state;
        };
    }());
    //toggleBtn.onclick = toggle;


    //ex 2)
    var incleaseBtn = document.getElementById('inclease');
    var count = document.getElementById('count');

    // var inclease = (function(){
    //     var counter = 0;

    //     return function(){
    //         ++counter;
    //         count.innerHTML = counter;
    //     }
    // }());

    // incleaseBtn.onclick = inclease;

    var inclease = (function(){
        var counter = 0;
        return function() {
            return ++counter;
        }
    }());

    incleaseBtn.onclick = function() {
        count.innerHTML = inclease();
    }


    //ex 3)
    function makeCounter(predicate) {
        var num = 0;
        return function() {
            num = predicate(num);
            return num;
        }
    }

    function plus(n) {
        return ++n;
    }
    function minus(n) {
        return --n;
    }

    const plusBtn = makeCounter(plus);
    console.log(plusBtn());

    //plusBtn 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
    const minusBtn = makeCounter(minus);
    console.log(minusBtn());
}());