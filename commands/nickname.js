const db = require('quick.db')
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {


    if(!args[0]) return message.channel.send('**Please enter `view` or `set [name]`**')
    if (args[0] === 'set') {
    let data = { username: args[1], balance: 100 };
    const nicknames = new db.table('nicknames')
    nicknames.set(`names_${message.author.id}`, data)
        nicknames.fetch(`names_${message.author.id}`).then(obj => {
            message.channel.send(`**Your profile nickname i set to ${obj.username}**`)
        })
    }

        if (args[0] === 'view') {
            const nicknames = new db.table('nicknames')
            nicknames.fetch(`names_${message.author.id}`).then(obj1 => {
                message.channel.send(`**Your nickname is ${obj1.username}**`)
            })
        } 
    
}