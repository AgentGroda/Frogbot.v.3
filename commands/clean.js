const db = require('quick.db')
module.exports.run = async (client, message, args) => {
try {
  const prefix = await db.fetch(`prefix_${message.guild.id}`)

    const m = await message.channel.send('*Cleaning my commands*...');
    if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) {
      return m.edit(':no_entry_sign: Failed to clear commands because I\'m missing the **Manage Messages** permission.');
    }
    const msgs = await message.channel.messages.fetch({ limit: 90 });
    const msgArray = msgs.filter(mes =>
      mes.author.id === client.user.id
      || mes.content.startsWith(client.commandPrefix)
      || mes.content.toLowerCase().startsWith('cancel')
    );
    message.channel.bulkDelete(msgArray);
  //  m.edit(':white_check_mark: Successfully cleaned up my commands!');
  //  setTimeout(message.delete, 1000);
    return null;
} catch (error) {
message.channel.send(`**ERROR:** ${error}`)
}
  }
  exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };

