const Discord = require('discord.js');
const fs = require('fs'),
      send = require('quick.hook')
exports.run = (client, message) => {

  message.delete();

  if (message.author.id === '295231913612804096') {

    var moffel = client.guilds.map(k => '👤' + k.name)
    var doffel = client.guilds.map(k => '👪' + k.members.size)

    var embed = new Discord.MessageEmbed()
    .setTitle('__**Guilds**__')
    .setColor(0xe56e32)
    .addField('Name', moffel, true)
    .addField('Members', doffel, true);
    message.channel.send(embed)
  } else {
    message.channel.send("ONLY THE BOT OWNER CAN USE THIS COMMAND!")
    
    return;
 
  };
  

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };