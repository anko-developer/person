var funcs = [];

// for(var i = 0; i < 3; i++) {
//     (function(index){
//         funcs.push(function() { console.log(index); });
//     }(i));
// }

// let 키워드는 블록레벨 스코프이므로 아래와 같이 사용가능, 클로저 기능까지
for (let i = 0; i < 3; i++) {
    funcs.push(function() { console.log(i); });
}

for(var j = 0; j < 3; j++) {
    console.dir(funcs[j]);
    funcs[j]();
}


// const는 재할당을 하게 되면 에러가 발생하지만 
const user = {
    name : 'anko'
}

// 객체의 내용은 변경할 수 있다.
user.name = 'wook';
console.log(user.name);

/**
 * ES6를 사용한다면 var 키워드는 사용하지 않는다.
 * 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
 * 변경이 발생하지 않는(재할당이 필요 없는 상수) 원시 값과 객체에는 const 키워드를 사용한다. const 키워드는 재할당을 금지하므로 var, let 보다 안전하다.
 */


 //전역변수 중복을 막기위해 즉시실행 함수로 감싸주고 작업
(function(){
    var MYAPP = {};
    MYAPP.me = {
        name: 'wook',
        age: 33
    };
    console.log('test1: ' + MYAPP.me.name);
}());

 console.log('test2: ' + MYAPP.me.name);


 // 2020.02.17