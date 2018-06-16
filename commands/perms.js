//const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    let Discord = require("discord.js")
try {
    let string = '```md\n';
    let user = message.mentions.users.first() || message.author;
    message.channel.permissionsFor(user).toArray().map(p => string += `+ ${p.charAt(0) + p.toLowerCase().replace(/_/g, ' ').slice(1).replace(`vad`, `VAD`)}\n`)
    let finalStr = string + "```"
    let embed = new Discord.MessageEmbed()
       .setTitle(`Permissions for ${user.tag}`)
       .setDescription(finalStr)
       .setColor("RANDOM")
    message.channel.send(embed)

}   catch (err) {
message.channel.send(`**${err.name}: ${err.message}**`)
}
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };