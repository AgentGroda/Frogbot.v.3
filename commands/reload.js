exports.run = async (client, message, args) => {
  if (message.author.id === '295231913612804096') {
  if(!args) return message.channel.send("Must provide a command name to reload.");
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.channel.send(`**The command ${args[0]} has been reloaded**`)
  }

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };