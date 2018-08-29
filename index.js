let processor = require("processor.js");
let writer = require("writer.js");

exports.handler = (requestMsgRecords) => {
    console.log('Calling handler function... requestMsgRecords: ' + JSON.stringify(requestMsgRecords));
    
    requestMsgRecords.Records.forEach(function(record) {
        let requestMsg = JSON.parse(record.body);
        let responseMsg = processor.process(requestMsg);
        
        console.log("Writing response to response-queue");
        writer.writeToResponseQueue(responseMsg);
    });
    
};