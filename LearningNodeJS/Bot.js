console.log("Jee's Bot is starting");

// Grabs the installed package from NPM and allows us to use it.

// Link to the twit documentation
// https://www.npmjs.com/package/twit
var Twit = require('twit');


var T = new Twit({
    consumer_key:         '...',
    consumer_secret:      '...',
    access_token:         '...',
    access_token_secret:  '...',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })