import './assets/stylesheets/styles.scss'; //sass 연결
import './study/13day/vanilla.js';//

import $ from 'jquery';
const DOM = {
    body: '#Body'
};

// $(DOM.body).append('<h1>Webpack/Vue</h1>');
$(DOM.body).prepend('<h1>Webpack/Vue</h1>');
// $(DOM.body).addClass('__block');
// $(DOM.body).css('background-color', '#ffd200');