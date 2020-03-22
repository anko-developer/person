(function() {
    'use strict';
    // ES6 spread 기억해보기
    const aa = [1,3,4];
    const bb = [2,5,6];
    const cc = [...aa.slice(0,1), ...bb.slice(0,1), ...aa.slice(1,3), ...bb.slice(1,3)];
    const dd = aa.concat(bb);
    console.log(cc);
    console.log(dd);
    
    const a = {
        name: 'wook',
        age: 33
    };

    const b = {
        job: 'developer'
    };

    const c = {...a, ...b};
    console.log(c);
}());

(function() {
    'use strict';

    const arr = ['a', 'b', 'c'];

    delete arr[1];
    console.log(arr);

    arr.splice(1,1);
    console.log(arr);
    
    
    arr.forEach((item, index) => {
        console.log(item, index);
    });

    for(const item of arr) {
        console.log(item);
    };


    const test = Array.of('반', '려', '견');
    if(test.indexOf('견') !== -1) {
        console.log('일치하는 문자가 있군요.');
    }
    
    if(test.includes('견')) {
        console.log('일치하는 문자가 있군요.'); 
    }

    const str = ['d', 'o', 'g'];
    console.log(str.reverse());
    console.log(str.join('/'));
    



    const todos = [
        { id: 1, content: 'HTML', completed: true },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'Javascript', completed: false }
    ];

    const clone = todos.slice();
    //const clone = [...todos];
    console.log(clone === todos); // false

    // 배열의 요소는 같다, 즉 얕은 복사가 된 것이다.
    // Spread 문법과 Object.assign는 원본을 shallow copy한다.
    // Deep copy를 위해서는 lodash의 deepClone을 사용하는 것을 추천
    console.log(clone[0] === todos[0]); // true
}());