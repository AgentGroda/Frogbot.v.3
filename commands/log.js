module.exports.run = async (client, message, args) => {

  const log = message.guild.channels.find(`name`, "log")
  
  if (!log) {
  
  message.guild.channels.create('log', 'text')
  message.channel.send('Successfully created a log channel!')
  }

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };