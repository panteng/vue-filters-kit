var Vue = require('vue');
var VueRouter = require('vue-router');

// vue config
Vue.use(VueRouter);
Vue.config.debug = true;

// register filters
Vue.filter('booleanFormatter', require('./filters/booleanFormatter'));
Vue.filter('percentageFormatter', require('./filters/percentageFormatter'));
Vue.filter('byteFormatter', require('./filters/byteFormatter'));
Vue.filter('timestampFormatter', require('./filters/timestampFormatter'));

// register views
Vue.component('v-demos', require('./views/demos'));

// app setup
var App = Vue.extend({
    template: require('./template.html'),
    replace: false
});

// router setup
var Router = new VueRouter({
    history: false,
    linkActiveClass: 'active'
});

Router.map({
    '/': {
        component: Vue.component('v-demos')
    }
});

Router.redirect({
    '*': '/'
});

Router.start(App, '#app');