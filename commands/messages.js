const db = require('quick.db')
exports.run = (client, message, args) => {


let member = message.mentions.members.first() || message.member;
let messages = new db.table('messages');
  messages.fetch(`messagesSent_${member.id}`).then(obj => {
    if (obj === null) obj = 0;
  
  message.channel.send(`**Messages Sent:** \`${obj}\``)

  
      .catch( error => message.channel.send(`**ERROR:** ${error.message}`))
  })
  

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };