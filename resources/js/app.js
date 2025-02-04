/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

Vue.component(
    'articles',
    require('./components/Articles.vue').default
);
Vue.component(
    'navbar',
    require('./components/Navbar.vue').default
);


const app = new Vue({
    el: '#app',
});