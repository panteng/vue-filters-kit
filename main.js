(function () {
	'use strict';

	var Vue = require('vue');

	// vue config
	Vue.config.debug = true;

	// register filters
	Vue.filter('booleanFormat', require('./filters/booleanFormatter'));
	Vue.filter('percentageFormat', require('./filters/percentageFormatter'));
	Vue.filter('byteFormat', require('./filters/byteFormatter'));
	Vue.filter('timestampFormat', require('./filters/timestampFormatter'));

	// app setup
	var App = new Vue({
	    el: '#app',
	    data: {
	            boolean: 1,
	            decimal: 0.153333,
	            size: 1000000,
	            timestamp: 1456989887000
	    }
	});
})();