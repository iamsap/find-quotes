function extractQuotes(quoteText, cb) {
    quoteText = quoteText.replace(/\r?\n|\r/g,' ').replace(/\s\s+/g, ' ');
    var result = quoteText.match(/".*?"/g);
    if(!result){
        result = [];
    }
    for(var i = 0; i < result.length;i++){
        result[i] = result[i].replace(/"/g, '');
    }
    cb(null, result)
}

module.exports = extractQuotes;