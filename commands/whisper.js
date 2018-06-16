const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
try {
  let reason = args.slice(1).join(' ');  
  let responses = [`Hey! You have been whispered.. He/She said:\n-\n${reason}`, `Psst, someone whispered you with:\n${reason}`, `It seems like someone whispered you.. He/she said:\n-\n${reason}`, `psst, someone whispered you with:\n-\n${reason}`]  
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Mention a valid user to whisper to :eyes:");
 
  if(!reason)
    return message.reply("What do you want to whisper? :eyes:");
    member.send(`${responses[Math.floor(Math.random() * responses.length )]}`)              
  message.channel.send(`**${member.user.tag}** got succesfully whispered :white_check_mark:`).then(m => m.delete(5000));  
  message.delete() 
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