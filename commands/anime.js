const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(client, message, args) => {
    
try {

    let {body} = await superagent
    .get(`https://nekos.life/api/neko`);
    //if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Do you like it?")
    .setTitle("Anime")
    .setImage(body.neko)
    .setColor("RANDOM")
    .setFooter("By AgentGroda#6857");

    message.channel.send(hentaiEmbed).then(msg => {
         msg.react('👍');
        msg.react("👎");
            msg.react('😍');
        })


  
}  catch (err) {
message.channel.send(`**${err.name}: ${err.message}**`)
}

}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };