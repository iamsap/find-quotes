var findQuotes = require('../lib/');

describe('quote finder', function () {
    it('exists', function () {
        expect(findQuotes).toBeDefined();
    });

    it('contains a function called findQuotes', function () {
        expect(findQuotes['findQuotes']).toBeDefined();
        expect(typeof findQuotes['findQuotes']).toEqual('function');
    });

    it('recognizes that there are no quotes in this sentence', function (cb) {
       findQuotes.findQuotes('There are no quotes in this sentence', function(err, quotes){
           expect(err).toBe(null);
           expect(quotes.length).toEqual(0);
           cb();
       })
    });

    it('recognizes that there are is one quote in this sentence', function (cb) {
        findQuotes.findQuotes('So then he said to me, "Get to the choppa!"  And I did.', function(err, quotes){
            expect(err).toBe(null);
            expect(quotes.length).toEqual(1);
            cb();
        })
    });
})