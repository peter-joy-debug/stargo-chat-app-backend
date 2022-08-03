var TeleSignSDK = require('telesignsdk');

const customerId = "995BC5CB-F606-4457-9A4E-481CA57007EB";
const apiKey = "XMK3eHXph/TPeKf2Tul+5z8xEdzp9J8fy6mzypaV/8NeIsT9hUaNqcdqACTE4l8eDM2n1B+8+f3yduX7SUyoBw==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
);

const phoneNumber = "250780258266";
const message = "Hello Peter, \n I would like to let you know that this message API is working!";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}
client.sms.message(messageCallback, phoneNumber, message, messageType);
