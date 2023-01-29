<div align="center">


# Achar
All the utility functions you'll need to build a fully functional e-commerce site  
Created with :heart: and :coffee: by the [Basalam](https://basalam.com/) developers

<br />

![Version Badge][version-badge]
![Downloads Badge][downloads-badge]
![License Badge][license-badge]  
![Size Badge][size-badge]
![Stars Badge][starts-badge]

</div>

<br />
<br />
<br />
<br />

- [Getting started](#getting-started)
- [Basic usage](#basic-usage)
- [Usage](#usage)
  - [convertToSnakeCase](#converttosnakecase)
  - [generateUniqueId](#generateuniqueid)
  - [isObject](#isobject)
  - [numberSeparator](#numberseparator)
  - [rialToToman](#rialtotoman)
  - [rialToHumanizeToman](#rialtohumanizetoman)
  - [toEnglishDigits](#toenglishdigits)


<br />
<br />

## Getting started
Achar is an open-source, free project developed by the [Basalam](https://basalam.com/) developers. You can use the `achar-js` package in your e-commerce project by installing it from npm  

```
$ npm install achar-js // Or $ npm install --save achar-js for npm < 5.0.0
```

Or

```
$ yarn add achar-js
```

<br />

## Basic usage
You can use achar-js like any other JavaScript package.

```javascript
// Full Import
import * as achar from "achar-js"

achar.rialToToman(20000, { currencry: true, separator: true }) // تومان 2,000

// Single use
import { rialToToman } from "achar-js"

rialToToman(20000, { currencry: true, separator: true }) // تومان 2,000

// Single use (One util)
import rialToToman from "achar-js/rialToToman"

rialToToman(20000, { currencry: true, separator: true }) // تومان 2,000
```

<br />

## Usage
Here you can see an overview of the different utilities available and how they work  

<br />

### [convertToSnakeCase](https://github.com/basalam/achar-js/blob/master/src/convertToSnakeCase.ts)
Converts `snake_case` words to `camelCase`

```javascript
import { convertToSnakeCase } from "achar-js"

convertToSnakeCase("message_status") // messageStatus
```

<br />

It's also works with javascript objects or arrays  

```javascript
convertToSnakeCase({ message_status: "dont_touch", items: ["camel_me"] }) // { messageStatus: "dont_touch", items: ["camelMe"] }
```

<br />

### [generateUniqueId](https://github.com/basalam/achar-js/blob/master/src/generateUniqueId.ts)
Generates a unique id with the requested length

```javascript
import { generateUniqueId } from "achar-js"

generateUniqueId(16) // fk5ghtmvlprt2zyn
```

<br />

### [isObject](https://github.com/basalam/achar-js/blob/master/src/isObject.ts)
Checks whether the input value is an object or not

```javascript
import { isObject } from "achar-js"

isObject({}) // true
isObject([]) // false
isObject([]) // false
```

<br />

### [numberSeparator](https://github.com/basalam/achar-js/blob/master/src/numberSeparator.ts)
Separates the inputted number

```javascript
import { numberSeparat } from "achar-js"

numberSeparat(2000) // "2,000"
numberSeparat("2000") // "2,000"
```

<br />

### [rialToToman](https://github.com/basalam/achar-js/blob/master/src/rialToToman.ts)
Converts Rials to Tomans

```javascript
import { rialToToman } from "achar-js"

rialToToman(20000) // 2000
rialToToman("20000") // "2000"
rialToToman("20000", { currency: true }) // "2000 تومان"
rialToToman("20000", { separator: true }) // "2,000"
```

<br />

### [rialToHumanizeToman](https://github.com/basalam/achar-js/blob/master/src/rialToHumanizeToman.ts)
Converts Rials to Tomans in a human-readable form

```javascript
import { rialToHumanizeToman } from "achar-js"

rialToHumanizeToman(20000) // "2,000 تومان"
```

<br />

### [toEnglishDigits](https://github.com/basalam/achar-js/blob/master/src/toEnglishDigits.ts)
Converts Arabic or Persian numbers to English

```javascript
import { toEnglishDigits } from "achar-js"

toEnglishDigits("۴۰۰۰ بار سلام بر تو") // "4000 بار سلام بر تو"
toEnglishDigits("٤۰۰۰ تحية لكم") // "4000 تحياتي لكم"
```




[version-badge]: https://img.shields.io/npm/v/achar-js?color=ff5c39&label=VERSION&style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/achar-js?color=ff5c39&label=DOWNLOADS&style=flat-square
[license-badge]: https://img.shields.io/npm/l/achar-js?color=ff5c39&label=LICENSE&style=flat-square
[size-badge]: https://img.shields.io/bundlephobia/min/achar-js?color=ff5c39&label=MIZIFIED%20SIZE&style=flat-square
[starts-badge]: https://img.shields.io/github/stars/basalam/achar-js?color=ff5c39&label=STARTS&style=flat-square
