const Discord = module.require("discord.js"),
      send = require('quick.hook')

module.exports.run = async (client, message, args) => {
    message.delete(10000)
    let h = message.content.split(' ').slice(1).join(' ');
    if (!h) return send(message.channel, "***Please add text to your embed!***", {
    
    name: 'Embed Error',
    icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/document-128.png'
    
    
    })
    const embed = new Discord.MessageEmbed()
    .setTitle("Embed")
  //  .setThumbnail(`${message.author.avatarURL()}`)
    .setColor("RANDOM")
    .setDescription(`${h}`)
    .setFooter(`Embed made by: ${message.author.username} Made in Sweden`)
    send(message.channel, embed, {
    
    name: `Embed By ${message.author.username}`,
    icon: `${message.author.avatarURL()}`
    
    
    })

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };