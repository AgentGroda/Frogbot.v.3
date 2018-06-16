const db = require('quick.db'),
      Discord = require('discord.js');

exports.run = (client, message, args) => {
   // if(message.author.id !== '295231913612804096') return message.channel.send(`**Sorry! Only the Owner of the bot can use this command!**`)
if (!message.mentions.members.first()) return message.channel.send(`**Please mention a user!**`)
  
  let targetMember = message.mentions.members.first(),
      amount = parseInt(args.join(' ').replace(targetMember, ''))
  
  if (isNaN(amount)) return message.channel.send(`**Please define an amount!**`)
  
 let targetBalance = db.fetchObject(`_userBalance${targetMember.id}`),
     selfBalance = db.fetchObject(`_userBalance${message.author.id}`)

   if (targetBalance === null) targetBalance = 0;
  if (selfBalance === null) targetBalance = 0;
  
  if (amount > selfBalance) return message.channel.send(`**Sorry, you don't have enough money!`)
   
        db.add(`_userBalance${targetMember.id}`, amount);
        db.substract(`_userBalance${message.author.id}`, amount);
  
  
  
  message.channel.send(`**Successfully added ${amount} messages to ${targetMember}**`)


}
exports.conf = {
      aliases: ['example', 'chexample']
      };
     
      exports.help = {
      name: 'example', description: 'hello this is description', usage: 'example'
      };