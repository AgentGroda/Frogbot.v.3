const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {



    /*
    Example by ItsJordan#4297
    Adds a cooldown to your commands so the user will have to wait 2.5 seconds between each command.
    This code is only meant to be an example and not used without being edited.

    REMINDER: <Message> is what you defined in the <Client>.on('message') event.
*/

let talkedRecently = new Set();

// Checks if they have talked recently
if (talkedRecently.has(message.author.id)) {
  /* 
   You can change the nature of the cool down by changing the return to something else. 
   REMINDER: You may need to add an else statement if you do not have any returns in this scope.
  */
  return;
}
// Adds the user to the set so that they can't talk for 2.5 seconds
talkedRecently.add(message.author.id);
setTimeout(() => {
  // Removes the user from the set after 2.5 seconds
  talkedRecently.delete(message.author.id);
}, 2500);
try {

    
    
    
    let countdown = args[0];
    if (!countdown) return message.channel.send("**You didn't specify a time!**");
  
    let reminder = message.content.split(" ").slice(2).join(" ");
    if (!reminder) return message.channel.send('**Please enter a reminder!**')



   //modlog.send(`${tomute} has been muted for ${ms(ms(mutetime))} for the reason ${reason}`)

    message.channel.send(`**Got it! I will reminde you in: ${ms(ms(countdown))} with ${reminder}!**`)
    
    setTimeout(function() {
        message.author.send(`:alarm_clock: **Reminder: ${reminder}!**`)
    }, ms(countdown));
}   catch (err) {
    message.channel.send(`**${err.name}: ${err.message}**`)
}

}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };