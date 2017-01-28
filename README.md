# find-quotes
A simple npm library for identifying quotes in a paragraph of text

## example
```
var findQuotes = require('find-quotes');
var quoteText = 'That\'s when Todd knew it was over.  "Get over here," he said.';

findQuotes.find(quoteText, function cb(err, quotes){
    console.log('I found ' + quotes.length + ' quotes'); 
});
```

### output
```
I found 1 quotes.
```

