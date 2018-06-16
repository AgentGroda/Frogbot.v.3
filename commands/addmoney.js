const db = require('quick.db'),
      Discord = require('discord.js'),
      send = require('quick.hook');

exports.run = (client, message, args) => {
    if(message.author.id !== '295231913612804096') return send(message.channel, `**Sorry! Only the Owner of the bot can use this command!**`, {
    
    name: 'Add Money Error',
    icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/tools-256.png'
    
    })
if (!message.mentions.members.first()) return message.channel.send('**Please mention a user!**')

  
  let targetMember = message.mentions.members.first(),
      amount = parseInt(args.join(' ').replace(targetMember, ''))
  parseInt(args[1])
  
  if (isNaN(amount)) return message.channel.send('**Please define an amount!**')
  
 let targetBalnce = db.fetch(`_userBalance${targetMember.id}`)
 
        db.add(`_userBalance${targetMember.id}`, amount);
  
 message.channel.send(`**Successfully added ${amount} money to ${targetMember}**`) 

  //message.channel.send(`**Successfully added ${amount} money to ${targetMember}**`)


}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };