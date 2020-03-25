(function() {
    'use strict';

    const num = [1, 20, 50, 10, 12, 19, 21, 100];
    num.sort(); // 유니코드 순으로 sort가 된다.
    console.log(num); // [1,10,100,12,19,20,21,50]
    
    num.sort((a,b) => a - b); // 한줄이기 때문에 arrow function는 {} 생략가능, return도 암묵적으로 된다.
    console.log(num); // [1,10,12,19,20,21,50,100]

    num.sort((a,b) => b - a); // num.reverse() 처럼 먹힌다.
    console.log(num); // [100,50,21,20,19,12,10,1]


    // 배열을 정렬해보기
    const todos = [
        { id: 4, contents: 'Javascript' },
        { id: 1, contents: 'HTML' },
        { id: 2, contents: 'CSS' }
    ];
    
    function compare(key) {
        return function(a,b) {
            return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
        }
    }
    
    todos.sort(compare('id')); // id 기준 정렬
    todos.sort(compare('contents')) // contents 기준 정렬
}());

(function() {
    'use strict';
    const numbers = [1, 2, 3];
    let total = 0;

    numbers.forEach((item, index, self) => { // forEach 인수는 배열 요소의 값, 인덱스, this를 전달함
        total += item; // 1+2+3
    });
    console.log(total); // 6

    const num = [1000, 99, 200];
    num.forEach((item, index, self) => {
        self[index] = Math.floor(Math.random() * 100) + 1; // forEach에서 인수의 this 값으로 원본 배열을 직접 변경 할 수 있다.
    });
}());