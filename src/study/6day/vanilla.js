(function(){
    'use stritc';

    const aa = {a:"데이터1",b:"데이터2"};
    const bb = {b:"일부로 겹치게 데이터2",c:"데이터3",d:"데이터4"};
    const cc ={...aa,...bb}; //결합
    //겹치는 데이터명은 가장 오른쪽데이터가 들어감.
    console.log(cc);


    
    const box = document.getElementById('Box');
    const edit = document.getElementById('editBtn');
    const del = document.getElementById('delBtn');
    const view = document.getElementById('viewBtn'); 

    var setCookie = function(name, value, day) {
        var date = new Date();
        date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    };

    var getCookie = function(name) {
        var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value? value[2] : null;
    };

    var deleteCookie = function(name) {
        var date = new Date();
        document.cookie = name + "= " + "; expires=" + date.toUTCString() + "; path=/";
    }

    edit.onclick = () => {
        setCookie('test', 'wook', 3);
    }

    view.onclick = () => {
        if(getCookie('test')) {
            box.innerHTML = 'cookie value: ' + getCookie('test');
        }
    }

    del.onclick = () => {
        deleteCookie('test');
    }
}());


(function time(){
    const today = new Date();

    const dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
    // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
    const day = dayNames[today.getDay()];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // 12시간제로 변경
    hour %= 12; // ex) 14시는 14 % 12 = 2시로
    hour = hour || 12; // 0시는 => 12시로

    // 10미만인 분과 초를 2자리로 변경
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

    console.log(now);

    //setTimeout(time, 1000);
}());