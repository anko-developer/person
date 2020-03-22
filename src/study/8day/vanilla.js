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
    
    
}());