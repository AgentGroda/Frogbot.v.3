const Discord = require('discord.js');
const send = require('quick.hook')

exports.run = function(client, message) {



  let args = message.content.split(' ').splice(1).join(' ') || message.author.discriminator;
  if (args.length > 4) {
    message.reply('**A discriminator is only __4 numbers__ long!**')
    
      
    return;
  };
  if (args.length < 4) {
    message.reply('**A discriminator is __4 numbers__ long!**')
      
        
      
    return;
  };
  var res = client.users.filter(u => u.discriminator === `${args}`).map(u => u.username);
  if (res.length < 1) res = 'Nobody Found';

  let embed = new Discord.MessageEmbed()
    .setColor(0xe56e32)
    .setTitle(`People with discrim ${args}`)
    .setDescription(res)
//message.channel.send(embed)
  message.channel.send({
    embed


});

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };