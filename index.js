(function() {
  var _private, arrayifySentence, formatSentence, formatWordsArr, fs, removeWords;

  fs = require('fs');

  _private = {};

  removeWords = function(sentence, wordsArray) {
    var dictionaryWord, index, j, k, len, len1, sentenceArr, sentenceWord;
    if (wordsArray == null) {
      wordsArray = void 0;
    }
    if (wordsArray == null) {
      wordsArray = fs.readFileSync('./words.txt', 'utf8').split('\r\n');
    } else {
      wordsArray = formatWordsArr(wordsArray);
    }
    sentenceArr = arrayifySentence(sentence);
    for (j = 0, len = wordsArray.length; j < len; j++) {
      dictionaryWord = wordsArray[j];
      for (index = k = 0, len1 = sentenceArr.length; k < len1; index = ++k) {
        sentenceWord = sentenceArr[index];
        if (sentenceWord === dictionaryWord) {
          sentenceArr.splice(index, 1);
        }
      }
    }
    return sentenceArr;
  };

  arrayifySentence = function(sentence) {
    sentence = formatSentence(sentence);
    sentence = sentence.split(' ');
    return sentence = sentence.filter(function(n) {
      return n !== '';
    });
  };

  formatWordsArr = function(wordsArr) {
    var i, j, len, word;
    if (!wordsArr instanceof Array) {
      return [];
    }
    for (i = j = 0, len = wordsArr.length; j < len; i = ++j) {
      word = wordsArr[i];
      wordsArr[i] = formatSentence(word);
    }
    return wordsArr;
  };

  formatSentence = function(sentence) {
    sentence = sentence != null ? sentence : '';
    sentence = sentence.toLowerCase();
    sentence = sentence.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    return sentence = sentence.replace(/[^\w\s]/gi, '');
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