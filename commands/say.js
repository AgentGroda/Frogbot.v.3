const Discord = module.require("discord.js"),
      send = require('quick.hook')
   // let data = message.content.split(" ").slice(1).join(" ");
module.exports.run = async (client, message, args) => {
try {

      let data = message.content.split(" ").slice(1).join(" ");
      if (!data) return message.channel.send('Please enter a text to say.')
message.channel.send(data)
    message.delete(3500);
}     catch (err) {

      message.channel.send(`**${err.name}: ${err.message}`)
}

}
exports.conf = {
      aliases: ['example', 'chexample']
      };
     
      exports.help = {
      name: 'example', description: 'hello this is description', usage: 'example'
      };