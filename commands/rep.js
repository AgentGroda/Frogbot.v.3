const db = require('quick.db')
const ms = require('parse-ms')
module.exports.run = async (client, message, args) => {

    
    let cooldown = 8.64e+7

    const rep = new db.table('REPs')
    const timer = new db.table('timers')
    let lastRep = await timer.fetch(`lastRep_${message.author.id}`)

    if (lastRep !== null && cooldown - (Date.now() - lastRep) > 0) {
      let timeObj = ms(cooldown - (Date.now() - lastRep));

      message.channel.send(`You already collected this, please wait **${timeObj.hours}h ${timeObj.minutes}m**!`)


    } else {
        const member = message.mentions.users.first();
        if (!member) return message.channel.send('**You need to mention a member to give a rep!**')
        if (member.id === message.author.id) return message.channel.send(`**You can't give yourself a rep!**`)
        if (member.bot) return message.channel.send(`**You can't give reps to bots!**`)
     message.channel.send(`**Successfully gived a rep to ${member}!**`)

      timer.set(`lastRep_${message.author.id}`, Date.now())

      const a = await rep.fetch(`userRep_${member.id}`)
      const b = 1

      rep.set(`userRep_${member.id}`, a+b)
    }
}