(function() {
    //'use strict';
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
    };

    App.method('getData', function() {
        let name = this.name;
        return new Promise((resolve, reject) => { // 1. Pending(대기) 상태, 콜백함수의 인자는 resolve, reject
            let str = 'promise';

            if (str === 'promise') { // 2. Fulfilled(이행) 상태, resolve() 혹은 reject() 결과 갓을 받아올 수 있다.
                resolve(name + '님의 ' + str); // str 값이 'promise'이면 resolve를
            }

            reject(new Error('Promise study Error!')) // str 값이 'promise'가 아니면 reject를
        });
    });

    const wook = new App('김명욱');

    wook.getData().then((n) => {
        // resolve()의 결과 값이 여기로 전달됨
        console.log(n + ' 값이 맞습니다!'); // str 값이 n에 전달됨
        
    }).catch((err) => {
        console.log(err); // 오류를 출력
    });


    // setTimeout을 통해 promise 쉽게 알아보기
    new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(1);
        }, 2000);
    })
    .then(function(result) {
        console.log(result); // resolve 값 1을 받아오고
        return result + 10;
    })
    .then(function(result) {
        console.log(result); // 위의 then에서 result 값을 받아와서 11
        return result + 20;
    })
    .then(function(result) {
        console.log(result); // 위의 then에서 result 값을 받아와서 31
    });
}());

(function() {
    //'use strict';
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
    };

    App.prototype.userInfo = {
        id: 'anko-developer@gamil.com',
        pw: '1234'
    };

    App.method('getData', function(getInfo) {
        const info = getInfo;
        return new Promise((resolve, reject) => {
            if (info) { // userInfo가 있는지 체크
                resolve(info) // 있으면 resolve로 userInfo 값을 받아 온다.
            }
            reject(new Error('User Info Can\'t find!'));
        });
    });

    App.method('parseValue', function(valueCheck) {
        return new Promise((resolve, reject) => {
            if (valueCheck.id && valueCheck.[w]) { // userInfo id, pw 값이 모두 있으면
                resolve(console.log('Login success!')) // 로그인 성공 메세지 출력
            }
            reject(new Error('Id or Pw Value Error!'));
        });
    });

    const my = new App();

    my.getData(my.userInfo)
    .then(my.parseValue)
    .catch((err) => {
        console.log(err);
    });
}());