const snekfetch = require('snekfetch'),
      Discord = require('discord.js')
module.exports.run = async (client, message, args) => {


    if (message.channel.type !== 'dm')
    if (!message.channel.permissionsFor(client.user).has('ATTACH_FILES')) return message.channel.send(':no_entry_sign: I don\'t have the **Attach Files** permission!');
  try {

    const { body } = await snekfetch
      .get('http://aws.random.cat/meow');
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage(body.file);
    message.channel.send(embed);
    //return msg.say({ files: [body.file] }).catch(err => msg.say(`${err.name}: ${err.message}`));
  } catch (err) {
    return message.channel.send(`${err.name}: **${err.message}**`);
  }
}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };