expect = require('chai').expect

process.env.NODE_ENV = 'test'

removeWords = require('../index').main

describe 'Check the main method at high level', ()->

  it 'Should return an array given any input', ()->
#    expect(removeWords('Hello World!')).to.be.instanceof(Array);
#    expect(removeWords('')).to.be.instanceof(Array);
#    expect(removeWords('', '')).to.be.instanceof(Array);

  it 'Should strip out generic keywords', ()->
#    expect(removeWords('Is it going to be sunny in London?'))
#    .eql([ 'sunny', 'london' ])

#    expect(removeWords('Thanks JavaScript for brightening my day with TypeError'))
#    .eql(['thanks', 'javascript', 'brightening', 'day', 'typeerror'])

  it 'Should still strip out words even if the case is different', () ->
#    expect(removeWords('foo bar BAR and FOO AND bar'))
#    .eql(['foo', 'bar'])

#    expect(removeWords('Dinosaurs ARE AWESOME '))
#    .eql(['dinosaurs', 'awesome'])

  it 'Should be able to cope with all special characters', ()->
#    expect(removeWords('omg!! *CoffeeScript* is so totally amazing!!!*&("&*&"^'))
#    .eql(['omg', 'coffeescript', 'totally', 'amazing'])
#    expect(removeWords('t.o.o mu£c%h p*u*n*c*t*u-a-t-i-o=n i*s n^o$t co[o]l}{'))
#    .eql(['punctuation', 'cool'])

  it 'Should remove specified keywords from an array in the second param', ()->
    expect(removeWords('everything is stupid', ['everything', 'is'])).eql(['stupid'])
    expect(removeWords('CoffeeScript, JavaScript, HTML are cool', ['html', 'are']))
    .eql(['coffeescript', 'javascript', 'cool'])

  it 'Should accept a string as the second param', ()->
    expect(removeWords('everything is stupid', 'stupid'))
    .eql(['everything', 'is'])

  it 'Should remove duplicates', ()->
#    expect(removeWords('foo bar and is foo bar If bar foo why'))
#    .eql(['foo', 'bar'])


  it 'should not crash with invalid sentence (first param)', ()->
#    removeWords()           # Forgot any paramaters
#    removeWords([])         # Passes array as first param
#    removeWords(undefined)  # Passes undefined as first param
#    removeWords(0)          # Passes integer as first param
#    removeWords('')         # Passes empty string as first param


  it 'should not crash with invalid optional second param', ()->
    removeWords('', [])         # Passes empty array as second param
    removeWords('', undefined)  # Passes undefined as second param
    removeWords('', 0)          # Passes integer as second param
    removeWords('', '')         # Passes empty string as second param
    removeWords('', '', '')     # Passes three paramaters

