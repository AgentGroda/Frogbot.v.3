const Discord = require('discord.js'); 
 
exports.run = (client, message, args, tools) => {
 

 
try {
    let rulesRole = message.guild.roles.find(role => role.name === 'Rules');
 
      message.channel.send('Test').then(msg => {
        msg.react("✅")


       
        const acceptFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  
       
        const accept = new Discord.ReactionCollector(message, filter, options);

       
      })     
  
}      catch (err) {
    message.channel.send(`**${err.name}: ${err.message}**`)
}
 
  
 
}