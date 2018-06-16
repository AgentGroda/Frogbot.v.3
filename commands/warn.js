const Discord = require('discord.js');
const db = require('quick.db')
const send = require('quick.hook')
module.exports.run = async (client, message, args) => {

      if (!message.member.hasPermission("KICK_MEMBERS")) return send(message.channel, "Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.", {
        name: 'Warn Error', 
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
      })
const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
const mod = message.author;
let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!user) return send(message.channel, "Couldn't find user.", {
    name: 'Warn Error',
    icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
})
      if (user.hasPermission("KICK_MEMBERS")) return send(message.channel, "The user you are trying to warn is either the same, or higher role than you.", {
        name: 'Warn Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
      })
        let reason = message.content.split(" ").slice(2).join(" ");
        if (!reason) return send(message.channel, 'Please specify a reason for the warn!', {
          name: 'Warn Error',
          icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        })
        const casenumbers = new db.table('CASENUMBERs')
        const guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
        const a = guildcasenumber
        const b = a+1
        casenumbers.set(`case_${message.guild.id}`, b)
      //  console.log(guildcasenumber)
      const numberwarn = new db.table('WARNNUMBERs')
      const num1 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
      const y = 1
      const m = y+num1
      numberwarn.set(`user_${user.id}_${message.guild.id}`, m)
     // console.log(num1)
    


  
      if (!modlog) return message.channel.send('**Please create a channel with the name `mod-log`**')

  
  if (user) {

  //user.kick({ reason: `${reason}`})
  const userwarn = new db.table('USERWARNINGs')
  const num2 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
  const warns = await userwarn.fetch(`warn_${user.id}_${num2}_${message.guild.id}`)
  userwarn.set(`warn_${user.id}_${num2}_${message.guild.id}`, reason)
    
    const embed = new Discord.MessageEmbed()
        .setAuthor('Warn')
    .addField('Moderator', `${mod}`)
    .addField('User', `<@${user.id}>`)

    .addField('Reason', `${reason}`)
    .addField('Case Number', `${guildcasenumber}`)
    .setColor('BLUE')
    .setTimestamp()
    .setThumbnail(user.user.avatarURL())
    .setFooter(`ID ${user.id}`)
    send(modlog, embed, {
      name: 'Warn',
      icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    send(message.channel, 'I have warned the person and logged it!', {
      name: 'Warn',
      icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    user.send(`**You have been warned in ${message.guild.name}: ${reason}!**`)
  
  
  }
}
