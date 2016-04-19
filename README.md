# vue-filters-kit

A bunch of useful custom filters for Vue.js apps.

![Screenshot](https://raw.githubusercontent.com/panteng/vue-filters-kit/master/screenshot.jpg)

## Demo

[Click Here](http://panteng.me/demos/vue-filters-kit/)

This demo uses Bootstrap.css for styling. But you should know that no stylesheets are needed for using these filters in your app.

## Filters

For now, this project contains four custom vue filters.

1. Boolean Formatter - converts boolean values into human-readable texts, eg: true-->YES, 0-->Disabled.
2. Byte Formatter - converts bytes to kilobytes or megabytes or gigabytes or terabytes, eg: 1000000-->976.56K.
3. Percentage Formatter - converts numbers into percentage, eg: 0.1567-->15.67%.
4. Timestamp Formatter - converts timestamps into human-readable time, eg: 1456989887000-->Thursday, March 3rd, 2016

## Getting Started

1. Put these files in your project folder. Usually under src/filters.

    - booleanFormatter.js
    - byteFormatter.js
    - percentageFormatter.js
    - timestampFormatter.js
    
2. Register these filters in your app. You can register them globally like this:

        Vue.filter('booleanFormatter', require('./filters/booleanFormatter'));
        Vue.filter('percentageFormatter', require('./filters/percentageFormatter'));
        Vue.filter('byteFormatter', require('./filters/byteFormatter'));
        Vue.filter('timestampFormatter', require('./filters/timestampFormatter'));
        
## Usage

#### Boolean Formatter

`{{ rawValue | booleanFormatter [trueText] [falseText] }}`

`[trueText]` is the text that will show if rawValue equals to true.

`[falseText]` is the text that will show if rawValue equals to false.

For example:

    <span>{{ isActive | booleanFormatter 'Yes' 'No' }}</span>
    
If `isActive` equals to true, the rendered html will be:

    <span>Yes</span>
    
Else if `isActive` equals to false, the result will will be:

    <span>No</span>

By default, `[trueText]` is 'Yes' and `[falseText]` is 'No'.

#### Byte Formatter

`{{ rawValue | byteFormatter }}`

`rawValue` is a number whose unit is byte.

For example:

    <span>{{ size | byteFormatter }}</span>
    
If `size` equals to 1000000, the rendered html will be:

    <span>976.56 K</span>

#### Percentage Formatter

`{{ rawValue | percentageFormatter [digit] }}`

`[digit]` is the number of digits to keep after decimal.

For example:

    <span>{{ ratio | percentageFormatter '4' }}</span>
    <span>{{ ratio | percentageFormatter '2' }}</span>
    
If `ratio` equals to 0.15666666, the rendered html will be:

    <span>15.6667%</span>
    <span>15.67%</span>

By default, `[digit]` is '2'.

#### Timestamp Formatter

Timestamp Formatter depends on [Moment.js](http://momentjs.com/). Make sure you have installed Moment.js via NPM.

`{{ rawValue | timestampFormatter [format] }}`

`[format]` is the format of the output time string.

For example:

    <span>{{ startTime | timestampFormatter 'YYYY/MM/DD' }}</span>
    
If `startTime` equals to 1456989887000, the rendered html will be:

    <span>2016/03/03</span>
    
By default, `[format]` is 'YYYY-MM-DD HH:mm:ss'. You can see more about `[format]` in [Moment.js Documentation](http://momentjs.com/docs/#/parsing/string-format/).

## License

MIT