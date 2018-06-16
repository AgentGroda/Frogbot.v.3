const Discord = module.require("discord.js")
      //send = require('quick.hook')

module.exports.run = async (client, message, args) => {
  message.channel.send('**Invite me with this link! <https://discordapp.com/oauth2/authorize?client_id=364071140034871296&permissions=8&scope=bot>**')
    //message.channel.send("**https://discordapp.com/oauth2/authorize?client_id=364071140034871296&permissions=8&scope=bot**")

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };