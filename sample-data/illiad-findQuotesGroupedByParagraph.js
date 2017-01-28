'use strict'

/** Reads The Illiad and returns the quotes */

var fs = require('fs');
fs.readFile('./sample-data/illiad.mb.txt', 'utf-8', function (err, illiadText) {

    var quotes = require('../lib');
    quotes.findQuotesGroupedByParagraph(illiadText, function(err, quotes){
       for(var i = 0; i < quotes.length;i++){
           console.log(i + '\t' + quotes[i].quote);
           console.log('-');
       }
    }, {paragraphDelim:'\n\n'});

});