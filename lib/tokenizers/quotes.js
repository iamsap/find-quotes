function extractQuotes(quoteText, cb) {
    var result = quoteText.match(/".*?"/g);
    cb(null, result)
}

module.exports = extractQuotes;