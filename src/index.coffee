
fs = require 'fs'

_private = {}

removeWords = (sentence, wordsArray=undefined) ->
  if !wordsArray?
    wordsArray = fs.readFileSync('./words.txt', 'utf8').split('\r\n')

  wordsArray


module.exports = removeWords

# If we're developing/ testing then export the private methods too
if process.env.NODE_ENV == 'test'
  module.exports = {
    main: removeWords
    _private: _private
  }