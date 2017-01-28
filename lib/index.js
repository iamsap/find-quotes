var tokenizers = require('./tokenizers');

const DEFAULT_OPTIONS = {
    paragraphDelim: '\n\n'
}

function QuoteFinder() {
}

QuoteFinder.prototype.findRawQuoteFragments = function findRawQuoteFragments(textString, cb) {
    var quotesFound = [];
    tokenizers.quotes(textString, function (err, quotes) {
        cb(err, quotes);
    });
}

QuoteFinder.prototype.findQuotesGroupedByParagraph = function findQuotesGroupedByParagraph(paragraphText, cb, options) {

    if (!options) {
        options = DEFAULT_OPTIONS
    }

    var self = this;

    tokenizers.paragraphs(paragraphText, function (err, paragraphsFound) {

        var total = paragraphsFound.length;
        var processed = 0;
        var groupedStrings = [];


        while (paragraphsFound.length > 0) {
            var paragraph = paragraphsFound.splice(0, 1)[0];
            self.findRawQuoteFragments(paragraph, function (err, fragments) {
                var buffer = '';

                if (fragments && fragments.length > 0) {

                    for (var i = 0; i < fragments.length; i++) {
                        var fragment = fragments[i]; //.replace(/"/g, '');
                        buffer += fragment;
                        buffer += ' ';
                    }

                    groupedStrings.push({quote: buffer.substring(0, buffer.length-1)});
                }

                processed++;
                if (processed >= total) {
                    // all done
                    cb(null, groupedStrings);
                }
            });
        }


    }, options.paragraphDelim);

}


module.exports = new QuoteFinder();