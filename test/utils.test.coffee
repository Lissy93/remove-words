expect = require('chai').expect

process.env.NODE_ENV = 'test'

removeWords = require('../index')._private

describe 'Check the sentence correctly gets tranformed into a valid array', ()->

  it 'Should correctly turn a sentence into an array', ()->
    expect(removeWords.arrayifySentence('hello world')).eql(['hello', 'world'])
    expect(removeWords.arrayifySentence('this is a longer sentence'))
    .eql(['this', 'is', 'a', 'longer', 'sentence'])

  it 'Should normalise case', ()->
    expect(removeWords.arrayifySentence('HeLlO wOrLd')).eql(['hello', 'world'])
    expect(removeWords.arrayifySentence('JAVASCRIPT')).eql(['javascript'])

  it 'Should remove dupplicates', ()->
    expect(removeWords.arrayifySentence('foo foo bar foo'))
    .eql(['foo', 'foo', 'bar', 'foo'])
  expect(removeWords.arrayifySentence('foo foo BAR Foo bAr foO bar foo'))
      .eql(['foo', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo'])

  it 'Should remove blanks', ()->
    expect(removeWords.arrayifySentence('space       blank        '))
    .eql(['space', 'blank'])

  it 'Should remove special characters', ()->
    expect(removeWords.arrayifySentence('foo ! ^&*^&^%^%&^^&%%^bar$$%^'))
    .eql(['foo', 'bar'])


#describe('Check the formating words array works as it should')


#describe('Check that the formating sentece works')


#describle('Check that the remove dupplicates is working')