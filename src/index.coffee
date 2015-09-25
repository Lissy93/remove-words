_private = {}


removeWords = () ->
  ['hello', 'world!']



module.exports = removeWords

# If we're developing/ testing then export the private methods too
if process.env.NODE_ENV == 'test'
  module.exports = {
    main: removeWords
    _private: _private
  }