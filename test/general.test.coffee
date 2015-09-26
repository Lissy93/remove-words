expect = require('chai').expect

process.env.NODE_ENV = 'test'

removeWords = require('../index').main


describe 'Check the modules basic functionality', ()->

  it 'Should return an array given any input', ()->
    expect(removeWords('Hello World!')).to.be.instanceof(Array);
    expect(removeWords('')).to.be.instanceof(Array);
#    expect(removeWords('', '')).to.be.instanceof(Array);

  it 'Should strip out generic keywords', ()->

  it 'Should remove specified keywords from an array in the second param', ()->

  it 'Should accept a string as the second param', ()->

  it 'Should be able to convert a string to an array in all circumstances', ()->

  it 'Should be able to normalize words to be only a-z lowercase', ()->

  it 'should throw a suitable error and not crash with invalid input', ()->
#    removeWords()  # Forgot any paramaters
#   removeWords([]) # Passes array as first param
#   removeWords(0)  # Passes integer as first param
#   removeWords('')  # Passes empty string as first param
#   removeWords('', [])  # Passes empty array as second param
#   removeWords('', 0)  # Passes integer as second param
#   removeWords('', '')  # Passes empty string as second param
#   removeWords('', '', '')  # Passes three paramaters






