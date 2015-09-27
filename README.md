
# remove-words

[![Build Status](https://travis-ci.org/Lissy93/remove-words.svg?branch=dev)](https://travis-ci.org/Lissy93/remove-words)
[![Dependency Status](https://david-dm.org/lissy93/remove-words.svg)](https://david-dm.org/lissy93/remove-words)
[![devDependency Status](https://david-dm.org/lissy93/remove-words/dev-status.svg)](https://david-dm.org/lissy93/remove-words#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/Lissy93/remove-words/badges/gpa.svg)](https://codeclimate.com/github/Lissy93/remove-words)


>A node module that returns an array of all words in a string that are not a pronoun or generic words.

This can be used for storing just the keywords of a string in a database and not wasting space with words like 'and', 'to', 'the'... which are unlikely to be searched for in a query.


## Installation 
```npm install remove-words --save```


## Example
```javascript
var removeWords =  require('remove-words');

removeWords("Today is sunny so we are going to go swimming at the seaside");
// Will return: ['today', 'sunny', 'swimming', 'seaside']


```

## Using a custom word list
```javascript

var names = ['jack', 'john', 'joe', 'james', 'jim']
removeWords("The winners are: Jack, John and Jim!!!") 
// Will remove just all names
```

## Features
- Case insensitive
- Handles special characters, URL's and other non standard strings
- Doesn't return any duplicates or blanks 
- Thoroughly unit tested
- Words list is customisable, optionally pass in your own array as the second parameter


## Tests
Run ```npm test```


## Building
- `gulp build` - Lints and compiles CoffeeScript
- `gulp test` - Runs tests
- `gulp` - Watches for changes, cleans working directory, builds and tests


## License
MIT © [Alicia Sykes](http://aliciasykes.com)