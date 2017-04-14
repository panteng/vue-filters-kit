import Vue from 'vue';

// app setup
const App = new Vue({
	el: '#app',
	data: {
		boolean: 1,
		decimal: 0.153333,
		size: 1000000,
		timestamp: 1456989887000
	},
	// register filters
	filters: {
		booleanFormat: require('./filters/booleanFormatter'),
		percentageFormat: require('./filters/percentageFormatter'),
		byteFormat: require('./filters/byteFormatter'),
		timestampFormat: require('./filters/timestampFormatter')
	}
});
