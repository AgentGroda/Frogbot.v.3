const fs = require('fs'),
      Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
const commandsList = fs.readFileSync("Storage/commanduser.txt", "utf8");
const commandlist1 = fs.readFileSync('Storage/commandmod.txt', 'utf8');

message.author.send(commandsList)
message.author.send(commandlist1)
message.channel.send(`**I've sent a commandlist to you!**`).then(m => {
    m.react('📬')
})
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };