var sentences = require('../../lib/tokenizers/sentences');

describe('sentence tokenizer', function () {
    if ('exists', function () {
            expect(sentences).toBeDefined();
            expect(sentences.length).toEqual(2);
        });


});