const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
try {

    const owner = message.author;
    const bot = client.users.get(`${args[0]}`);
    if(!bot.bot) return message.channel.send('**Please enter a valid bot ID!**')
    const agentgroda = client.users.get(`295231913612804096`);
    if (!args[0]) return message.channel.send('**Please include the ID of your bot!**')
    if (!args[1]) return message.channel.send('**Please include the prefix of your bot!**')
    if (!args[2]) return message.channel.send('**Please include the help command of your bot!**')

    const embed = new Discord.MessageEmbed()
    .setAuthor(`New Bot!`)
    .setDescription(`Owner: ${owner.tag}`)
    .addField('ID', `${args[0]}`)
    .addField('Preifx', `${args[1]}`)
    .addField('Help Command', `${args[2]}`)
    .addField('Invite Link', `https://discordapp.com/oauth2/authorize?client_id=${args[0]}&scope=bot&permissions=0`)
    .setThumbnail(`${bot.avatarURL()}`)

    message.channel.send('*Sending this to AgentGroda#6857...*')
    agentgroda.send(embed)
} catch (err) {
    message.channel.send(`**${err.name}: ${err.message}**`)
}
    
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };