var paragraphs = require('../../lib/tokenizers/paragraphs');

describe('paragraphs tokenizer', function () {
    it('exists', function () {
        expect(paragraphs).toBeDefined();
        expect(paragraphs.length).toEqual(3);
    });
});