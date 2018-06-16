const send = require('quick.hook')
exports.run = (client, message, args) => {
    if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send("**You don't have permission to use this command!**")
  if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of message to purge**')
  
  if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**')
  
  message.channel.bulkDelete(args[0])
    .then( messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${args[0]}\` messages**`).then( msg => msg.delete({ timeout: 10000})))
  .catch( error => message.channel.send(`**ERROR:** ${error.message}`))


}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };