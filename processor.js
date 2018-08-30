let _ = require('lodash');

exports.process = (flightMsg) => {
    console.log('Processing FlightMsg: ' + JSON.stringify(flightMsg));
    let count = countWords(flightMsg.message);
    console.log("Word count = " + count);
    
    return {
        "flight-number" : flightMsg['flight-number'],
        "message" : flightMsg.message,
        "no-of-words" : count,
        "timestamp" : flightMsg.timestamp
    };
};

function countWords(sentence) {
    if(sentence === undefined) {
        console.error('Sentence is undefined.');
        return 0;
    }
    console.log('Counting words in: ' + sentence);
    return _.split(sentence).length;
}
