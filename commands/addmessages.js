const db = require('quick.db'),
      Discord = require('discord.js'),
      send = require('quick.hook');

exports.run = (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission('MANAGE_WEBHOOKS')) return message.reply("**Sorry, i missing the permission `Manage Webhooks`")
    if(message.author.id !== '295231913612804096') return send(message.channel, `**Sorry! Only the Owner of the bot can use this command!**`, {
    
    name: 'Add Messages Error',
    icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/tools-256.png'
    
    
    })
if (!message.mentions.members.first()) return message.channel.send('**Please mention a user!**')
let messages = new db.table('messages');
  let targetMember = message.mentions.members.first(),
      amount = parseInt(args.join(' ').replace(targetMember, ''))
  
  if (isNaN(amount)) return message.channel.send(`**Please define an amount!**`)
  
 let targetBalnce = messages.fetch(`messagesSent_${targetMember.id}`)
 
        messages.add(`messagesSent_${targetMember.id}`, amount);
  
  
  message.channel.send(`**Successfully added ${amount} messages to ${targetMember}**`)
  //message.channel.send(`**Successfully added ${amount} messages to ${targetMember}**`)


}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };