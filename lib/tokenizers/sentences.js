function extractSentences(sentenceText, cb){
    var result = sentenceText.match( /[^\.!\?]+[\.!\?]+/g );
    cb(null, result)
}

module.exports = extractSentences;