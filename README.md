
# remove-words

[![Greenkeeper badge](https://badges.greenkeeper.io/Lissy93/remove-words.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/Lissy93/remove-words.svg?branch=dev)](https://travis-ci.org/Lissy93/remove-words)
[![Dependency Status](https://david-dm.org/lissy93/remove-words.svg)](https://david-dm.org/lissy93/remove-words)
[![devDependency Status](https://david-dm.org/lissy93/remove-words/dev-status.svg)](https://david-dm.org/lissy93/remove-words#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/Lissy93/remove-words/badges/gpa.svg)](https://codeclimate.com/github/Lissy93/remove-words)
[![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)](https://github.com/Lissy93)


>A node module that returns an array of all words in a string that are not a pronoun or generic words.

This can be used for storing just the keywords of a string in a database and not wasting space with words like 'and', 'to', 'the'... which are unlikely to be searched for in a query.


## Installation
```yarn add remove-words --save```


## Example
```javascript
var removeWords =  require('remove-words');

removeWords("Today is sunny so we are going to go swimming at the seaside");
// Will return: ['today', 'sunny', 'swimming', 'seaside']


```

## Removing duplicates
By default all duplicates will be removed. The second (optional) parameter is a
boolean, specifiying weather of not to remove duplicates.

```javascript
removeWords("Hello world hello hello", true); // ["hello", "world"]
removeWords("Hello world hello hello", false); // ["hello", "world", "hello", "hello"]
```

## Using a custom word list
```javascript

var names = ['jack', 'john', 'joe', 'james', 'jim']
removeWords("The winners are: Jack, John and Jim!!!", true, names)
// Will remove just all names
```

## Features
- Case insensitive
- Handles special characters, URL's and other non standard strings
- By default doesn't return any duplicates, but can be specified in 2nd parameter
- Doesn't return blanks or special characters
- Thoroughly unit tested
- Words list is customisable, optionally pass in your own array as the third parameter


## Tests
Run ```npm test```


## Building
- `gulp build` - Lints and compiles CoffeeScript
- `gulp test` - Runs tests
- `gulp` - Watches for changes, cleans working directory, builds and tests


## Contributing
If you find an issue:
 - Feel free to raise it as an issue [here](https://github.com/Lissy93/remove-words/issues)
 (give as much detail about your scenario as possible) and I'll look into it
 - Or better yet submit a pull request with your feature or fix. Ensure all tests still pass
 and give a short sentence of why it should be merged in the PR description.

## Development
- Clone the repo and cd into it. `git clone https://github.com/Lissy93/remove-words.git && cd $(basename $_ .git)`
- Install dev dependencies `yarn install --production=false`
- Build and/or watch `npm run build`/ `npm run watch`
- Make changes, then run `npm test`

## License
MIT © [Alicia Sykes](http://aliciasykes.com) 2017. [View licence](LICENSE.MD).
