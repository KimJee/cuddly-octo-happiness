//-------------------------------------------------------------------------------------------------------------------------------
// Grabs the installed package from NPM and allows us to use it.

// Link to the twit documentation
// https://www.npmjs.com/package/twit
let Twit = require("twit"); // The 'twit' package from NPM
let config = require("./secrets"); // My secret file with the API keys within it.
let T = new Twit(config); // Login via Twit with API keys

const outfile = require('fs');    // File to be written to 

//-------------------------------------------------------------------------------------------------------------------------------

let TwitterSearchParam = {
	q: 'Scholarship',
    count: 20,
    lang: 'en',
    tweet_mode: "extended",
};

function writeToFile(filename, data, err) {
    outfile.writeFile(filename, data, (err) => { if (err) throw err;} )
}

function doSomethingWithData(err, data, response) {
	if (err) {
		console.log("Error has occured");
	} else {
		// Writes data to the console
        //console.log(data);

        // Name : Tweet 
        for (status of data.statuses)
        { 
            //if (status.in_reply_to_status_id == null && status.retweet_count == 0)
            {
                if (status.entities.hashtags.length < 5)
                {
                    console.log("\nUser: " + status.user.name + "\nText: " + status.full_text);
                }
            }
        }
        
        //console.log("Now writing to the file");
		// Writes data to an external file
        writeToFile("API.json", JSON.stringify(data), err);

    }
}

function SearchByStatus(SearchParam, CallbackFunction) {
	T.get("search/tweets", SearchParam, CallbackFunction);
}


// ---------------------------------------------------------------------------------------------------------------------
console.log("Jee's Bot is starting");



console.log("Jee's Bot is logged in");
SearchByStatus(TwitterSearchParam, doSomethingWithData);

/*
    get() - search by [User, Hashtag, Location, User, etc...]
    post() - Tweeting something
    stream() - Constant communication (like sockets) and apply events to the string 
*/

// ---------------------------------------------------------------------------------------------------------------------