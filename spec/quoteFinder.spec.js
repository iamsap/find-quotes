var findQuotes = require('../lib/');

describe('quote finder', function () {
    it('exists', function () {
        expect(findQuotes).toBeDefined();
    });

    describe('findRawQuoteFragments', function(){

        it('contains a function called findRawQuoteFragments', function () {
            expect(findQuotes['findRawQuoteFragments']).toBeDefined();
            expect(typeof findQuotes['findRawQuoteFragments']).toEqual('function');
        });

        it('recognizes that there are no quotes in this sentence', function (cb) {
            findQuotes.findRawQuoteFragments('There are no quotes in this sentence', function (err, quotes) {
                expect(err).toBe(null);
                expect(quotes.length).toEqual(0);
                cb();
            })
        });

        it('recognizes that there are is one quote in this sentence', function (cb) {
            findQuotes.findRawQuoteFragments('So then he said to me, "Get to the choppa!"  And I did.', function (err, quotes) {
                expect(err).toBe(null);
                expect(quotes.length).toEqual(1);
                cb();
            })
        });

    });

    describe('findQuotesGroupedByParagraph', function () {

        it('can extract quotes and group them by paragraph', function (cb) {
            expect(findQuotes['findQuotesGroupedByParagraph']).toBeDefined();
            expect(findQuotes['findQuotesGroupedByParagraph'].length).toEqual(3);
            cb();
        });

        it('can extract multiple fragments into a complete quote', function (cb) {
            var paragraphText = `
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

            var expectedResult = 'Dread son of Saturn, what, pray, is the meaning of all this? Is my trouble, then, to go for nothing, and the sweat that I have sweated, to say nothing of my horses, while getting the people together against Priam and his children? Do as you will, but we other gods shall not all of us approve your counsel.';

            findQuotes.findQuotesGroupedByParagraph(paragraphText, function (err, paragraphs) {

                expect(err).toEqual(null);
                expect(paragraphs.length).toEqual(1);
                expect(paragraphs[0].quote).toEqual(expectedResult);

                cb();
            }, {paragraphDelim:'\n\n'})


        });

        it('can extract 2 paragraphs into two complete quotes', function (cb) {
            var paragraphText = `
                    The sire of gods and men heeded her words, and said to Minerva, "Go
        at once into the Trojan and Achaean hosts, and contrive that the Trojans
        shall be the first to break their oaths and set upon the Achaeans."

        This paragraph should be completely ignored.

        This was what Minerva was already eager to do, so down she darted
        from the topmost summits of Olympus. She shot through the sky as some
        brilliant meteor which the son of scheming Saturn has sent as a sign
        to mariners or to some great army, and a fiery train of light follows
        in its wake. "Yes." The Trojans and Achaeans were struck with awe as they
            beheld, and one would turn to his neighbour, saying, "Either we shall
        again have war and din of combat, or Jove the lord of battle will
        now make peace between us."
            `

            findQuotes.findQuotesGroupedByParagraph(paragraphText, function (err, paragraphs) {

                expect(err).toEqual(null);
                expect(paragraphs.length).toEqual(2);
                expect(paragraphs[0].quote).toBeDefined();
                expect(paragraphs[1].quote).toBeDefined();

                console.log(paragraphs[0].quote);
                console.log('---');
                console.log(paragraphs[1].quote);

                cb();
            }, {paragraphDelim:'\n\n'})


        });

    });

})