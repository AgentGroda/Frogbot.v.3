module.exports.run = async (client, message, args) => {

  if (message.guild.id !== '348829652787265537') return;
try {
  const role = message.guild.roles.find(role => role.name === 'Updates');
  if (message.member.roles.has(role.id)) {
    message.member.roles.remove(role).catch(e => { message.reply(e); });
    message.reply(':no_entry_sign: You will no longer recieve updates about Frogbot on this server.');
  } else if (!message.member.roles.has(role.id)) {
    message.member.roles.add(role).catch(e => { message.reply(e); });
    message.reply(':white_check_mark: You will now recieve updates about Frogbot on this server.');
  }
} catch (e) {
  message.channel.send(`**${e.name}: ${e.message}**`)
}
  }
  exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };
