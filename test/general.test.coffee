expect = require('chai').expect

process.env.NODE_ENV = 'test'

removeWords = require('../index').main


describe 'Check the modules basic functionality', ()->

  it 'Should return an array given any input', ()->
    expect(removeWords('Hello World!')).to.be.instanceof(Array);
    expect(removeWords('')).to.be.instanceof(Array);
#    expect(removeWords('')).to.be.instanceof(Array);

  it 'Should strip out keywords in an array', ()->


  it 'Should strip out any generic short words by default', ()->




