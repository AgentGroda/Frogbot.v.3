const sm = require('string-similarity'); // This is the primary package we will be using.
 
exports.run = (client, message, args) => { // This is the same handler we have been using in the previous episodes.
 
    // First, we want to make sure the user put some text as input.
  if (!args[0]) return message.channel.send('Please input some text');// This is from the `Global Functions` episode. - This checks to see if args[0] is defined, if it's not it runs the return statement.
 
  // Next, we want to create 2 arrays, one of the users and one of their ID's
  let members = [];
  let indexes = [];
 
  // We want to run through each member in the server, and add them to those arrays
  message.guild.members.forEach(function(member){ // This function will run through each member in the guild.
    members.push(member.user.username);
    indexes.push(member.id); // This will push both the ID and username into the arrays
  });
 
  // Now, we can find the item in the array that best matches the arguments they wrote in chat.
  let match = sm.findBestMatch(args.join(' '), members); // What this does is finds the best match from 'args', when joined.
  // `match` now holds an object with the bestmatch, this object can be seen on the `string-similarity` npm page.
  let username = match.bestMatch.target; // This now holds the username of the bestmatch.
  // To get the userID of the bestmatch, we now have to access the indexes array.
 
  let member = message.guild.members.get(indexes[members.indexOf(username)]); // We can view this from the out, in. It first gets the index of username, and finds it in members, and since indexes and members have the same values/length it will show the ID there, which can be translated into members.
 
  message.channel.send('Do you mean: ' + `${member}`) // Now, we can post in chat what the autocomplete is.
 
  // Let's test it out!
 
};
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };