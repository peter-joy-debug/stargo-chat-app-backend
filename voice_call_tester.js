// const Mailjet = require('node-mailjet');
// const mailjet = Mailjet.smsConnect('a1k2g3e4r5a6a7v8i9a1t2i3o4n', {
//   config: {
//     version: 'v4'
//   }
// });

// const request = mailjet
//         .post('sms-send')
//         .request({
//           Text: "Hello Peter Joy,\n\n We would like to let you know that we are testing our API engine.\n\nAkagera Aviation.",
//           To: "+250788857628",
//           From: "+250780258266"
//         })

// request
//         .then((result) => {
//           console.log(result.body)
//         })
//         .catch((err) => {
//           console.log(err.statusCode)
//         })


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

const phoneNumber = "250783208091";
const message = "Hello Albertine, I would like to greet you, how have you been, It's your brother Honore Peter Joy. My birthday wishes for you: I hope the sun shines on you, the wind is at your back, your food tastes good, you see smiles and hear laughter every day but especially on your birthday. To day is Sunday Cool Awesome!";
const messageType = "ARN";

console.log("## VoiceClient.call ##");

function voiceCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}
client.voice.call(voiceCallback, phoneNumber, message, messageType);
