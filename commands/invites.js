const Discord = require('discord.js'),
      arraySort = require('array-sort'),
      table = require('table')



exports.run = async (client, message, args, tools) => {

try {
  let invites = await message.guild.fetchInvites();
  
  invites = invites.array();
  
  
  arraySort(invites, 'uses', { reverse: true });
  
  let possibleInvites = [['User', 'Uses']]
  invites.forEach(function(invite){
  
    possibleInvites.push([invite.inviter.username, invite.uses]);
    

  
  })
      
    const embed = new Discord.MessageEmbed()
        .setColor(0x7289da)
        .setTitle('Server Invites')
        .addField('Leaderboard', `\`\`\`${table.table(possibleInvites)}\`\`\``)
    
 message.channel.send(embed)
} catch (err) {
message.channel.send(`Error: **${err.name}: ${err.message}**`)
}


}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };