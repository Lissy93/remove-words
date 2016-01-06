(function() {
  var _private, arrayifySentence, formatSentence, formatWordsArr, fs, removeDuplicates, removeWords;

  

  _private = {};

  removeWords = function(sentence, wordsArray) {
    var dictionaryWord, index, j, k, len, len1, sentenceArr, sentenceWord;
    if (wordsArray == null) {
      wordsArray = void 0;
    }
    if (wordsArray == null) {
      wordsArray = "aboard\r\nabout\r\nabove\r\nacross\r\nand\r\nafter\r\nagainst\r\nare\r\ngoing\r\nall\r\nalong\r\nalthough\r\namid\r\namong\r\nanother\r\nanti\r\nany\r\nanybody\r\nanyone\r\nanything\r\naround\r\nas\r\nat\r\nbecause\r\nbefore\r\nbehind\r\nbe\r\nbelow\r\nbeneath\r\nbeside\r\nbesides\r\nbetween\r\nbeyond\r\nboth\r\nbut\r\nby\r\nconcerning\r\nconsidering\r\ndespite\r\ndown\r\nduring\r\neach\r\neither\r\neven\r\nevery\r\neverybody\r\neveryone\r\neverything\r\nexcept\r\nexcepting\r\nexcluding\r\nfew\r\nfollowing\r\nfor\r\nfrom\r\nhe\r\nher\r\nhers\r\nherself\r\nhim\r\nhimself\r\nhis\r\nhow\r\nif\r\nin\r\nis\r\ninside\r\ninto\r\nit\r\nits\r\nitself\r\njust\r\nlike\r\nlittle\r\nmany\r\nme\r\nmine\r\nminus\r\nmore\r\nmost\r\nmuch\r\nmy\r\nmyself\r\nnear\r\nneither\r\nnobody\r\nnone\r\nnot\r\nnothing\r\nnow\r\nof\r\noff\r\non\r\nonce\r\none\r\nonly\r\nonto\r\nopposite\r\nother\r\nothers\r\nour\r\nours\r\nourselves\r\noutside\r\nover\r\npast\r\nper\r\nplus\r\nregarding\r\nround\r\nsave\r\nseveral\r\nshe\r\nsince\r\nsome\r\nso\r\nsomebody\r\nsomeone\r\nsomething\r\nthan\r\nthat\r\nthe\r\ntheir\r\ntheirs\r\nthem\r\nthemselves\r\nthese\r\nthey\r\nthis\r\nthose\r\nthough\r\nthrough\r\nto\r\ntoo\r\ntoward\r\ntowards\r\nunder\r\nunderneath\r\nunless\r\nunlike\r\nuntil\r\nup\r\nupon\r\nus\r\nversus\r\nvia\r\nwe\r\nwhat\r\nwhatever\r\nwhen\r\nwhenever\r\nwhereas\r\nwhether\r\nwhich\r\nwhichever\r\nwhile\r\nwho\r\nwhoever\r\nwhy\r\nwhom\r\nwhomever\r\nwhose\r\nwith\r\nwithin\r\nwithout\r\nyou\r\nyour\r\nyours\r\nyourself\r\nyourselves".split('\r\n');
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