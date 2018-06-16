const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
try {
  const sTatus = ['AFK','DND','Online'];
  let info = message.guild.member(message.mentions.users.first())
   if(!info) return message.channel.send('***You did not specify a user Mention***')
 let member = message.mentions.members.first();
 let mention = message.mentions.users.first();
let embed = new Discord.MessageEmbed()
   .setDescription(`This is the info about **@${mention.username}#${mention.discriminator}**`)
   .setColor('RANDOM')
   .setThumbnail(`${member.user.avatarURL()}`)
   .addField(":bust_in_silhouette: **Username : **", `${mention.username}#${mention.discriminator}`, true)
   .addField(":id: **User ID :**", `${member.id}`, true)
   .addField(":speaking_head: **NickName :**", `${member.nickname}`, true)
   .addField(":red_circle: **Status**", `${member.user.presence.status === null ? "Offline / Invisible" : member.user.presence.status}`, true)
  // .addField(':shield: **Status**', `${member.user.presence.status === null ? "Offline / Invisible" : member.user.presence.status[message.guild.sTatus]}`, true)
   .addField(":video_game: **Playing :**", `${member.user.presence.activity === null ? "No Game" : member.user.presence.activity.name}`, true) 
   .addField(":robot: **Bot User**", `${member.user.bot}`, true)
   .addField(":page_facing_up: **Roles :**", `${member.roles.map(r => r.name).join(" | ")}`, true)
   .addField(":calendar_spiral: **Joined Guild :**", `${message.guild.joinedAt}`)
   .addField(":calendar_spiral: **Joined Discord :**", `${member.user.createdAt}`)
   .setFooter(`User that triggered command -> ${message.author.username}#${mention.discriminator}`)
message.channel.send('Finding Userinfo...').then((msg) => {
   msg.edit({embed})


})
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