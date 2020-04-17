(function() {
    // 'use strict';

    Function.prototype.method = function(name, func) {
        if (!this.prototype[name]) {
            this.prototype[name] = func;
        }
    };

    const Person = function(name) {
        if (!(this instanceof arguments.callee)) {
            return arguments.callee(name);
        }
    };

}());



var app = new Vue({
    data: {
        message: 'Hello Vue.js',
        dog: 'anko',
        uid: '20',
        flag: false
    },
    methods: {
        clickBtn: function() {
            console.log('hi');
        },
        testBtn: function() {
            console.log('test');
        }
    }
}).$mount('#app');