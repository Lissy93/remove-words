(function() {
  var _private, fs, removeWords;

  fs = require('fs');

  _private = {};

  removeWords = function(sentence, wordsArray) {
    if (wordsArray == null) {
      wordsArray = void 0;
    }
    if (wordsArray == null) {
      wordsArray = fs.readFileSync('./words.txt', 'utf8').split('\r\n');
    }
    return wordsArray;
  };

  module.exports = removeWords;

  if (process.env.NODE_ENV === 'test') {
    module.exports = {
      main: removeWords,
      _private: _private
    };
  }

}).call(this);
/* (C) Alicia Sykes <alicia@aliciasykes.com> 2015           *\
\* MIT License. Read full license at: https://goo.gl/IL4lQJ */