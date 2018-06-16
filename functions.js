// Although, this means we need to create a functions.js file in the root.
const sm = require('string-similarity');

module.exports = { // Since this is being called like a module, the inside file needs to look like a module as well.
  
  ping: function() { // This is how a function would look, the name on the left, followed by function() with optional arguments.
    
    return 'Hello!'; // For example, this will pass 'Hello!' to the file, using the ping() function. 
      
  },
  
  embed: function(channel, message, timer) { // We can try something more advanced, using embed as the function name. We are going to pass it 2 required arguments, and one optional being timer.
    
    channel = channel.channel || channel; // This makes it so you can just send it the message instead of channel, if message.channel is not found, it falls back to just channel. 
    
    channel.send({embed:{ // Now, it sends an embed message to that channel.
      description: message, // The description object, will be the message we input into it.
      color: 0x1db954 // This is the color object we will be passing the embed object.
    }}).then(msg => { // The channel.send returns a promise, being the msg it just sent, so we can use the message it just sent.
      if (!isNaN(timer)) msg.delete({timeout: timer}); // This is checking if `timer` is defined AND is a valid number. This is how you delete a message with a timer in v0.12, reminder that this is in ms, so you need to act accordingly 1second = 1000ms.
    });
    
  },
  
  autocomplete: function(message, string) { // Just like previously, we're going to need to require the package.
  
  // We won't need that since we already know there is a string.
  
  // Next, we want to create 2 arrays, one of the users and one of their ID's
  let members = [];
  let indexes = [];
  
  // We want to run through each member in the server, and add them to those arrays
  message.guild.members.forEach(function(member){ // This function will run through each member in the guild.
    members.push(member.user.username);
    indexes.push(member.id); // This will push both the ID and username into the arrays
  });
  
  // Now, we can find the item in the array that best matches the arguments they wrote in chat.
  let match = sm.findBestMatch(string, members); // What this does is finds the best match from 'args', when joined.
  // `match` now holds an object with the bestmatch, this object can be seen on the `string-similarity` npm page.
  let username = match.bestMatch.target; // This now holds the username of the bestmatch.
  // To get the userID of the bestmatch, we now have to access the indexes array.
  
  let member = message.guild.members.get(indexes[members.indexOf(username)]); // We can view this from the out, in. It first gets the index of username, and finds it in members, and since indexes and members have the same values/length it will show the ID there, which can be translated into members.
  
  // Now, we can return the user object by doing:
    return member; 
    
    // Let's test it out in the autocomplete.js
    
  }
  
};