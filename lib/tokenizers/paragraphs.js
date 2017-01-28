function extractParagraphs(sentenceText, cb, delim){
    var result = sentenceText.replace(delim, '||').split('||');
    cb(null, result)
}

module.exports = extractParagraphs;