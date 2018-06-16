// Now, lets start by making it so that we can edit those values.

// Require Packages
const db = require('quick.db')

exports.run = (client, message, args, func) => {

    // Return Statements
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You don't have permission to use this command!**") // This returns if it CANT find the owner role on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
    if (!message.mentions.channels.first() && args.join(" ").toUpperCase() !== 'NONE') return message.channel.send('**Please mention a channel!**') // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log

    // Fetch the new channel they mentioned
    let newChannel;
    if (args.join(" ").toUpperCase() === 'NONE') newChannel = ''; // If they wrote the word none, it sets newChannel as empty.
    else newChannel = message.mentions.channels.first().id; // If they actually mentioned a channel, it will set newChannel as that.

    // Update Channel
    db.set(`modlog__${message.guild.id}`, newChannel).then(i => {
        message.channel.send(`**Successfully updated mod-log channel to ${message.mentions.channels.first()}**`) // Finally, send in chat that they updated the channel.
    })

}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };