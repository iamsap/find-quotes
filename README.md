# find-quotes
A simple npm library for identifying quotes in a paragraph of text
## Installing
```
npm install --save @iamsap/find-quotes
```

## API
| API   |      Description |
|----------|:-------------|
| [findRawQuoteFragments(text, cb)](#extracting-raw-quote-fragments) |  Extracts all quoted strings as a string array.
| [findQuotesGroupedByParagraph(text, cb)](#extracting-quotes-grouped-by-paragraph) |  Groups quoted strings into a paragraph and combines them. |

## Extracting raw quote fragments
```
var findQuotes = require('find-quotes');
var quoteText = `
That's when Todd knew it was over.  "Get over here," he said. "Now!"
`;

findQuotes.findRawQuoteFragments(quoteText, function cb(err, quotes){
    // returns an array of string fragments
    console.log('I found ' + quotes.length + ' quotes'); 
});
```

**console.log**
```
I found 2 quotes.
```

## Extracting quotes grouped by paragraph 
```
var findQuotes = require('find-quotes');
var quoteText = `
            Minerva and Juno muttered their discontent as they sat side by side
hatching mischief for the Trojans. Minerva scowled at her father,
for she was in a furious passion with him, and said nothing, but Juno
could not contain herself. "Dread son of Saturn," said she, "what,
pray, is the meaning of all this? Is my trouble, then, to go for nothing,
and the sweat that I have sweated, to say nothing of my horses, while
getting the people together against Priam and his children? Do as
you will, but we other gods shall not all of us approve your counsel."

Jove was angry and answered,
`;

findQuotes.findQuotesGroupedByParagraph(quoteText, function cb(err, quotes){
    console.log(JSON.stringify(quotes[0]); 
});
```
***console.log***
```
[ // paragraph array
    { quote: "Dread son of Saturn, what, pray, is the meaning of all this? Is my trouble, then, to go for nothing, and the sweat that I have sweated, to say nothing of my horses, while getting the people together against Priam and his children? Do as you will, but we other gods shall not all of us approve your counsel."
    }
]
```