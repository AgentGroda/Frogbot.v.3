const db = require('quick.db')
const ms = require('parse-ms')
module.exports.run = async (client, message, args) => {
 // db.set(`userBalance_${message.author.id}`, 1)

    let cooldown = 8.64e+7
    let amount = 250;

    const money = new db.table('money')
    const timer = new db.table('timers')
    let lastDaily = await timer.fetch(`lastDaily_${message.author.id}`)

    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
      let timeObj = ms(cooldown - (Date.now() - lastDaily));

      message.channel.send(`You already collected this, please wait **${timeObj.hours}h ${timeObj.minutes}m**!`)


    } else {
      message.channel.send(`Successfully collected $${amount}`)

      timer.set(`lastDaily_${message.author.id}`, Date.now())

      const a = await money.fetch(`userBalance_${message.author.id}`)
      const b = amount

      money.set(`userBalance_${message.author.id}`, a+b)
    }
}