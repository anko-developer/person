import './assets/stylesheets/styles.scss'; //sass 연결
import './study/4day/vanilla.js';

import $ from 'jquery';
const DOM = {
    body: '#Body'
};

$(DOM.body).append('<p>Webpack</p>');
// $(DOM.body).addClass('__block');
// $(DOM.body).css('background-color', '#ffd200');