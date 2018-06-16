const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if (message.author.id !== ('295231913612804096')) return message.channel.send("Only the bot owner can use this command.");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.MessageEmbed()
      .setColor("#7289DA")
      .setDescription(':negative_squared_cross_mark:  Name watching status!');
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
  client.user.setActivity(`${status}`, {  type: "WATCHING"});
  const embed = new Discord.MessageEmbed()
    .setColor("#7289DA")
    .setDescription(':white_check_mark:  You sucessfully changed watching status');
  message.channel.send({ embed });
}};
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };