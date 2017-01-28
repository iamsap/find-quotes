var quotes = require('../../lib/tokenizers/quotes');

describe('quotes tokenizer', function () {
    it('exists', function () {
        expect(quotes).toBeDefined();
        expect(quotes.length).toEqual(2);
    });

    it('can find three sentences in given string', function (cb) {
        var testString = '"Hey," I said, "Where are you going Dad?" Thats when I noticed he was gone. "Dad?!!"';
        quotes(testString, function (err, quoteArr) {
            expect(err).toBe(null);
            expect(quoteArr).not.toBe(null);
            expect(quoteArr.length).toBe(3);
            expect(quoteArr[0]).toEqual('Hey,');
            expect(quoteArr[1]).toEqual('Where are you going Dad?');
            expect(quoteArr[2]).toEqual('Dad?!!');
            cb();
        });
    })

    it('should find two quotes in the given string', function (cb) {
        var testString = `
         Minerva and Juno muttered their discontent as they sat side by side
hatching mischief for the Trojans. Minerva scowled at her father,
for she was in a furious passion with him, and said nothing, but Juno
could not contain herself. "Dread son of Saturn," said she, "what,
pray, is the meaning of all this? Is my trouble, then, to go for nothing,
and the sweat that I have sweated, to say nothing of my horses, while
getting the people together against Priam and his children? Do as
you will, but we other gods shall not all of us approve your counsel."
        `;

        quotes(testString, function (err, quoteArr) {
            expect(quoteArr.length).toEqual(2);
            cb();

        });


    })

});