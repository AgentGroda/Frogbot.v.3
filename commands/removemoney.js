const db = require('quick.db'),
      Discord = require('discord.js'),
      send = require('quick.hook')

exports.run = (client, message, args) => {
    if(message.author.id !== '295231913612804096') return message.channel.send(`**Sorry! Only the Owner of the bot can use this command!**`)
if (!message.mentions.members.first()) return message.channel.send(`**Please mention a user!**`)
  
  let targetMember = message.mentions.members.first(),
      amount = parseInt(args.join(' ').replace(targetMember, ''))
  
  if (isNaN(amount)) return message.channel.send(`**Please define an amount!**`)
  
 let targetBalnce = db.fetch(`_userBalance${targetMember.id}`)
 
        db.substract(`_userBalance${targetMember.id}`, amount);
  
  
message.channel.send(`**Successfully removed ${amount} money to ${targetMember}**`)
 // message.channel.send(`**Successfully removed ${amount} money to ${targetMember}**`)


}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };