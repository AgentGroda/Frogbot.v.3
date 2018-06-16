const send = require('quick.hook')
exports.run = (client, message, args) => {
  const Discord = require ('discord.js');
  let bug = args.join(" ");
  if (!bug) return message.channel.send("***Please add a bug report!***")
  const embed = new Discord.MessageEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField(`___New Bug Report by ${message.author.username}___`, `***${bug}***`)
  .addField(`From server:`, `${message.guild}`)
  send(client.channels.get('402172505936232458'), embed, {
    
    name: 'New Bugreport',
    icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/chat-256.png'
  });

  const reply = new Discord.MessageEmbed()
  .setColor(0x00AE86)
  .setDescription(`:white_check_mark: ___***Bug report succesfuly sended***___`)
  message.channel.send(reply)
  //.then(m => m.delete(50000)); 
      .catch( error => message.channel.send(`**ERROR:** ${error.message}`))
}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };