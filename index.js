(function() {
  var _private, arrayifySentence, formatSentence, formatWordsArr, fs, removeDuplicates, removeWords;

  fs = require('fs');

  _private = {};

  removeWords = function(sentence, wordsArray) {
    var dictionaryWord, index, j, k, len, len1, sentenceArr, sentenceWord;
    if (wordsArray == null) {
      wordsArray = void 0;
    }
    if (wordsArray == null) {
      wordsArray = fs.readFileSync(__dirname + '/words.txt', 'utf8').split('\r\n');
    } else {
      wordsArray = typeof wordsArray === 'string' ? [wordsArray] : wordsArray;
      wordsArray = formatWordsArr(wordsArray);
    }
    sentence = typeof sentence === 'string' ? sentence : '';
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
    return removeDuplicates(sentenceArr);
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

  removeDuplicates = function(arr) {
    var j, key, ref, res, results, value;
    if (arr.length === 0) {
      return [];
    }
    res = {};
    for (key = j = 0, ref = arr.length - 1; 0 <= ref ? j <= ref : j >= ref; key = 0 <= ref ? ++j : --j) {
      res[arr[key]] = arr[key];
    }
    results = [];
    for (key in res) {
      value = res[key];
      results.push(value);
    }
    return results;
  };

  _private = {
    arrayifySentence: arrayifySentence,
    formatWordsArr: formatWordsArr,
    formatSentence: formatSentence,
    removeDuplicates: removeDuplicates
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