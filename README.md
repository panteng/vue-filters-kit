# Vue-Filters-Kit

A collection of useful custom filters for Vue.js(v2.x.x) apps.

## Demo

[Click Here](https://panteng.github.io/vue-filters-kit/)

This demo uses Bootstrap.css for styling. But you should know that no stylesheets are needed for using these filters in your webapps.

## Filters

For now, vue-filters-kit contains 4 custom filters.

1. [Boolean Formatter](#boolean-formatter) - converts boolean values into human-readable texts, eg: true-->YES, 0-->Disabled.
2. [Byte Formatter](#byte-formatter) - converts bytes to kilobytes or megabytes or gigabytes or terabytes, eg: 1000000-->976.56K.
3. [Percentage Formatter](#percentage-formatter) - converts numbers into percentage, eg: 0.1567-->15.67%.
4. [Timestamp Formatter](#timestamp-formatter) - converts timestamps into human-readable time, eg: 1456989887000-->Thursday, March 3rd, 2016

## Getting Started

1. Install via npm:

        npm install vue-filters-kit --save

2. Register these filters in your Vue.js app:

        const App = new Vue({
            el: '#app',
            // register filters
            filters: {
                booleanFormat: require('vue-filters-kit/filters/booleanFormatter'),
                percentageFormat: require('vue-filters-kit/filters/percentageFormatter'),
                byteFormat: require('vue-filters-kit/filters/byteFormatter'),
                timestampFormat: require('vue-filters-kit/filters/timestampFormatter')
            }
        });

## Usage

#### Boolean Formatter

`{{ rawValue | booleanFormat([trueText], [falseText]) }}`

`[trueText]` is the text that will show if rawValue equals to true.

`[falseText]` is the text that will show if rawValue equals to false.

For example:

    <span>{{ isActive | booleanFormat('Yes', 'No') }}</span>

If `isActive` equals to true, the rendered html will be:

    <span>Yes</span>

Else if `isActive` equals to false, the result will will be:

    <span>No</span>

By default, `[trueText]` is 'Yes' and `[falseText]` is 'No'.

#### Byte Formatter

`{{ rawValue | byteFormat }}`

`rawValue` is a number whose unit is byte.

For example:

    <span>{{ size | byteFormat }}</span>

If `size` equals to 1000000, the rendered html will be:

    <span>976.56 K</span>

#### Percentage Formatter

`{{ rawValue | percentageFormat([digit]) }}`

`[digit]` is the number of digits to keep after decimal.

For example:

    <span>{{ ratio | percentageFormat(4) }}</span>
    <span>{{ ratio | percentageFormat(2) }}</span>

If `ratio` equals to 0.15666666, the rendered html will be:

    <span>15.6667%</span>
    <span>15.67%</span>

By default, `[digit]` is 2.

#### Timestamp Formatter

Timestamp Formatter depends on [Moment.js](http://momentjs.com/). Make sure you have installed Moment.js via NPM.

`{{ rawValue | timestampFormat([format]) }}`

`rawValue` is a timestamp in milliseconds.

`[format]` is the format of the output time string.

For example:

    <span>{{ startTime | timestampFormat('YYYY/MM/DD') }}</span>

If `startTime` equals to 1456989887000, the rendered html will be:

    <span>2016/03/03</span>

By default, `[format]` is 'YYYY-MM-DD HH:mm:ss'. You can see more about `[format]` in [Moment.js Documentation](http://momentjs.com/docs/#/parsing/string-format/).

## License

MIT
