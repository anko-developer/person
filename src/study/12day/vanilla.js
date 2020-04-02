(function() {
    'use strict';
    
    function fetchItems() {
        return new Promise((resolve, reject) => {
            let items = [1,2,3];
            resolve(items);
        });
    }

    async function logTimes() {
        try {
            const resultItems = await fetchItems();
            console.log(resultItems);
        } catch (error) {
            console.log(error);
        }
    }

    // async·await를 쓰지 않았다면 then()으로 resolve 값을 받아오고, 코드가 길어졌을 것이다.
    // function logTimes() {
    //     fetchItems()
    //     .then((response) => {
    //         console.log(response);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    logTimes();
}());




(function() {
    'use strict';
    /**
     * async·await를 쓰니까 가독성도 좋아지고 코드도 짧아짐
     * fetch() API는 최신 브라우저에서만 동작한다, console로 값을 찍어보니 Promise 값을 반환한다.
     * fetchUser()에서 resolve값으로 users.json 데이터를 받아온다.
     * 받아온 users.json 데이터에서 id 값이 1이 맞으면 fetchTodo()에서 todos.json 데이터를 받아온다.
     * todos.json 데이터에서 title 값을 가져온다.
     */
    
    function fetchUser() {
        let url = 'users.json';
        return fetch(url).then((response) => {
            return response.json();
        });
    }

    function fetchTodo() {
        let url = 'todos.json';
        return fetch(url).then((response) => {
            return response.json();
        });
    }

    async function logTodoTitle() {
        try {
            let user = await fetchUser();

            if (user.id === 1) {
                let todo = await fetchTodo();
                console.log(todo.title);
            }
        } catch (error) {
            console.log(error);
        }
    }

    logTodoTitle();
}());