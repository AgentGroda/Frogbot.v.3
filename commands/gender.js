const db = require('quick.db')
module.exports.run = async (client, message, args) => {

    if (!args[0]) message.channel.send('**Please input a valid option.** `set` **or** `view`')


    const gender = new db.table('genders')

    if (args[0] === 'set') {
        if (!args[1]) return message.channel.send('**Please input a gender**')
        gender.set(`genders_${message.author.id}`, args[1])
        message.channel.send(`**Gender set to ${args[1]}**`)
    }

if (args[0] === 'view') {
    gender.fetch(`genders_${message.author.id}`).then(o => {
        if (o === null) o = 'Not Set.'
        message.channel.send(`**Your gender is: ${o}**`)
    })
}
    

 
}
