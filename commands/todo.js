module.exports.run = async (client, message, args) => {
  if (!message.author.id === '295231913612804096') message.channel.send('**This command is only for the bot owner!**')
    let data = message.content.split(" ").slice(1).join(" ");
  
    client.channels.get('436897850270547978').send(`**New Todo!** ${data}`)

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };