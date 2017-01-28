var quotes = require('../../lib/tokenizers/quotes');

describe('quotes tokenizer', function () {
    it('exists', function () {
        expect(quotes).toBeDefined();
        expect(quotes.length).toEqual(2);
    });


    it('can find three sentences in given string', function (cb) {
        var testString = '"Hey," I said, "Where are you going Dad?" Thats when I noticed he was gone. "Dad?!!"';
        quotes(testString, function (err, quotes) {
            expect(err).toBe(null);
            expect(quotes).not.toBe(null);
            expect(quotes.length).toBe(3);
            expect(quotes[0]).toEqual('"Hey,"');
            expect(quotes[1]).toEqual('"Where are you going Dad?"');
            expect(quotes[2]).toEqual('"Dad?!!"');
            cb();
        });
    })

});