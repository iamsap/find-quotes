var tokenizers = require('./tokenizers');

function QuoteFinder() {
}

QuoteFinder.prototype.findQuotes = function findQuotes(textString, cb) {
    var quotesFound = [];
    this.cb = cb;

    var self = this;
    tokenizers.quotes(textString, function(err, quotes){
        if(quotes){
            for (var i = 0; i < quotes.length; i++) {
                quotesFound.push(quotes[i]);
            }
        }

        self.done(quotesFound);
    });
}

QuoteFinder.prototype.error = function error(err){
    this.cb(err, null);
}

QuoteFinder.prototype.done = function done(quotes){
    this.cb(null, quotes);
}

module.exports = new QuoteFinder();