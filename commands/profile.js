const db = require('quick.db'),
      Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

    const set = args[0]
    const option = args[1]
    const gender = args[2]

try {
    let messages = new db.table('messages');
    messageCount = await messages.fetch(`messagesSent_${message.author.id}`)
    const member = message.mentions.users.first() || message.author;

    let msg = await messages.fetch(`messagesSent_${message.author.id}`)
        if (msg === null) msg = 0;
        const money = new db.table('money')

        let balance = await money.fetch(`userBalance_${member.id}`);
  
        if (balance === null) balance = 0;


        let genders = new db.table('genders');
        genders.fetch(`genders_${member.id}`).then(obj => {
          if (obj === null) obj = 'Not set.';
          if (obj === 1) obj = 'Female';
          if (obj === 2) obj = 'Male';
          if (obj === 3) obj = 'Nonbinary';
          const gender = obj
        

          const nicknames = new db.table('nicknames')
            nicknames.fetch(`names_${member.id}`).then(obj1 => {
                

            if (obj1 === null) obj1 = 'Not set.'

            const nickname = obj1

            const age = new db.table('age')
            age.fetch(`age_${member.id}`).then(obj3 => {

              if (obj3 === null) obj3 = '0'
              const age = obj3


      const rep1 = new db.table('REPs')
      rep1.fetch(`userRep_${member.id}`).then(obj2 => {
        
      if (obj2 === null) obj2 = '0'
      const reps = obj2
            
            
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Profile for: ${member.tag}`)
    .setFooter(`Command by AgentGroda#6857`)
    .setTimestamp()
    .setColor('RANDOM')
    .setDescription(`Info!\n Messages Sent: **${msg}**\n Money: **$${balance}**\n Reps: **${reps}**\n Gender: **${gender}**\n Nickname: **${nickname.username}**\n Age: **${age}**`)
    message.channel.send(embed)


  })
  })
            
            })
        })
    
}   catch (err) {
  message.channel.send(`**${err.name}: ${err.message}**`)
}
}