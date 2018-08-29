let AWS = require('aws-sdk');
let sqs = new AWS.SQS({region : 'eu-central-1'});

exports.writeToResponseQueue = (responseMsg) => {
    console.log('Calling writeToResponseQueue function... Message: ' + JSON.stringify(responseMsg));

    let params = {
      MessageBody: JSON.stringify(responseMsg),
      QueueUrl: process.env.RESPONSE_QUEUE_URL
    };
    
    sqs.sendMessage(params, function (err, data) {
      if (err) {
          console.error("Error", err);
      } else {
          console.log("Success", data.MessageId);
      }
    });

    console.log("done");
};