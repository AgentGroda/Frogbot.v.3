const Discord = module.require("discord.js")


module.exports.run = async (client, message, args) => {
try {
    message.channel.startTyping(true)
    var verificationLevel = message.guild.verificationLevel;
    const verificationLevels = ['None','Low','Medium','High','Extreme'];
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.name}'s Info`)
    .setThumbnail(message.guild.iconURL())
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL())
    .setTimestamp()
    .addField(':family_mwgb:**Server Name:**',`${message.guild.name}`, true)
    .addField(':id:**Server ID**', `${message.guild.id}`, true)
    .addField(':bust_in_silhouette: **Server Owner:**', `${message.guild.owner.user}`, true)
    .addField(':id: **Owner ID**', `${message.guild.owner.id}`, true)
    .addField(':busts_in_silhouette: **Members**', `${message.guild.members.filter(member => member.user.bot).size} bots of ${message.guild.memberCount} members`, true)
    .addField(':loud_sound: **Channels**', `${message.guild.channels.filter(channel => channel.type === 'voice').size} voice / ${message.guild.channels.filter(channel => channel.type === 'text').size} text`, true)
    .addField(':shield: **Verification Level**', `${verificationLevels[message.guild.verificationLevel]}`, true)
    .addField(':map: **Server Region**', `${message.guild.region}`, true)
    .addField(':zzz: **AFK Channel**', `${message.guild.afkChannel}`,true)
    .addField(':calendar_spiral: **Created**', `${message.guild.createdAt}`, true)

    //.addField('Roller', `${message.guild.roles.map(r => r.name).join(" -> ")}`)
    .setColor('RANDOM')
    message.channel.send(embed)
  
  message.channel.stopTyping()
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