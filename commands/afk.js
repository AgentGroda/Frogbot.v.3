const Discord = require('discord.js'),
  	  db = require('quick.db');

exports.run = async (client, message, args, tools) => {

  // Create a new 'AFK' table w/ Quick.db
  const status = new db.table('AFKs');

  // Fetch user object from that table
  let afk = await status.fetch(message.author.id);

  // Form Embed
  const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)

  if (!afk) { // Run if they are NOT afk, or afk is null
    embed.setFooter('You are now AFK.'); // Modify Embed
    // Add the user to the AFK pool
    status.set(message.author.id, args.join(' ') || `Sorry, ${message.author.username} is AFK.`);
  } else { // Run if they ARE afk
    embed.setFooter('You are no longer AFK.'); // Modify Embed
    // Remove the user from the AFK pool
    status.delete(message.author.id);
  }

  // Send Embed
  message.channel.send(embed);

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };