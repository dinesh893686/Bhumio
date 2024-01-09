const readline = require('readline');
const paraphrasingTool = require('paraphrasing-tool');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the text to paraphrase: ', (text) => {
  rl.question('Choose option (Professional, Creative, Urgent): ', (option) => {
    // Choose the appropriate method based on the selected option
    let paraphrasedText;
    switch (option.toLowerCase()) {
      case 'professional':
        paraphrasedText = paraphrasingTool.professional(text);
        break;
      case 'creative':
        paraphrasedText = paraphrasingTool.creative(text);
        break;
      case 'urgent':
        paraphrasedText = paraphrasingTool.urgent(text);
        break;
      default:
        console.error('Invalid option. Please choose Professional, Creative, or Urgent.');
        rl.close();
        return;
    }

    console.log('Paraphrased text:', paraphrasedText);
    rl.close();
  });
});
