const assert = require('assert');
const paraphrasingTool = require('paraphrasing-tool');

describe('Paraphrasing Tool', () => {
  it('should paraphrase text using professional method', () => {
    const inputText = 'Original text';
    const paraphrasedText = paraphrasingTool.professional(inputText);
    assert.notEqual(paraphrasedText, inputText);
  });

  it('should paraphrase text using creative method', () => {
    const inputText = 'Original text';
    const paraphrasedText = paraphrasingTool.creative(inputText);
    assert.notEqual(paraphrasedText, inputText);
  })

  it('should paraphrase text using urgent method', () => {
    const inputText = 'Original text';
    const paraphrasedText = paraphrasingTool.urgent(inputText);
    assert.notEqual(paraphrasedText, inputText);
  })
  // Add similar tests for creative and urgent methods
});
