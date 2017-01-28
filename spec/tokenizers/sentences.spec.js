var sentences = require('../../lib/tokenizers/sentences');

describe('sentence tokenizer', function () {
    it('exists', function () {
        expect(sentences).toBeDefined();
        expect(sentences.length).toEqual(2);
    });


});