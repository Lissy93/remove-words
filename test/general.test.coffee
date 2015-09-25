expect = require('chai').expect

process.env.NODE_ENV = 'test'

removeWords = require('../index').main


describe 'Check the modules basic functionality', ()->

  it 'Should create a new instance of stream-tweets with twitter keys and default second param', ()->
#    newInstance = new streamTweets(twitterKeys)
#    expect(newInstance).to.be.an.instanceof(streamTweets)
#    expect(newInstance.credentials).equal(twitterKeys)
#    expect(newInstance.shouldFormatResults).equal true

  it 'Should create a new instance of stream-tweets with 2 params passed to constructor', ()->
#    newInstance2 = new streamTweets(twitterKeys, false)
#    expect(newInstance2).to.be.an.instanceOf(streamTweets)
#    expect(newInstance2.credentials).equal(twitterKeys)
#    expect(newInstance2.shouldFormatResults).to.be.a('boolean')
#    expect(newInstance2.shouldFormatResults).equal(false)
#



