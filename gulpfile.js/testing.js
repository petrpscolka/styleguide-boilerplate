
// https://www.npmjs.com/package/differencify

const Differencify = require('differencify');
const differencify = new Differencify();

// w3c validation
function diff(done) {

    return differencify
        .init()
        .launch({ headless: true })
        .newPage()
        .setViewport({ width: 1600, height: 1200 })
        .goto('http://localhost:3000/testing')
        .screenshot()
        .toMatchSnapshot()
        .result((result) => {
          console.log(result); // Prints true or false
        })
        .close()
        .end();

}


// exports
module.exports = {
  build: diff
};
