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