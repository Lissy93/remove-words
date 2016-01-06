fs = require('fs')

require.extensions['.txt'] = (module, filename) ->
  module.exports = fs.readFileSync(filename, 'utf8')

_private = {}

removeWords = (sentence, wordsArray=undefined) ->
  if !wordsArray?
    wordsArray = fs.readFileSync(__dirname + '/words.txt', 'utf8').split('\r\n')
  else
    wordsArray =
      if typeof wordsArray == 'string' then [wordsArray] else wordsArray
    wordsArray = formatWordsArr(wordsArray)

  sentence = if typeof sentence == 'string' then sentence else ''

  sentenceArr = arrayifySentence(sentence)

  for dictionaryWord in wordsArray
    for sentenceWord, index in sentenceArr
      if sentenceWord == dictionaryWord
        sentenceArr.splice(index,1)

  removeDuplicates(sentenceArr)




# Format the sentence and return an array
arrayifySentence = (sentence) ->
  sentence = formatSentence(sentence)         # Lowercase + remove special chars
  sentence = sentence.split(' ')              # Split into an array
  sentence = sentence.filter((n) -> n != '')  # Remove blanks


# Formats each element of the words array
formatWordsArr = (wordsArr) ->
  if !wordsArr instanceof Array
    return []
  for word, i in wordsArr
    wordsArr[i] = formatSentence(word)
  wordsArr

# Removes URLs, special characters and then de-capitalizes a string
formatSentence = (sentence) ->
  sentence = if sentence? then sentence else '' # Double check is defined
  sentence = sentence.toLowerCase()
  sentence = sentence.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '') # Remove URLs
  sentence = sentence.replace(/[^\w\s]/gi, '') # Remove special characters


removeDuplicates = (arr) ->
  if arr.length == 0
    return []
  res = {}
  res[arr[key]] = arr[key] for key in [0..arr.length-1]
  value for key, value of res

_private = {
  arrayifySentence: arrayifySentence
  formatWordsArr:   formatWordsArr
  formatSentence:   formatSentence
  removeDuplicates: removeDuplicates
}


module.exports = removeWords

# If we're developing/ testing then export the private methods too
if process.env.NODE_ENV == 'test'
  module.exports = {
    main: removeWords
    _private: _private
  }
