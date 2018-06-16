module.exports.run = async (client, message, args) => {


  try {
    const role = message.guild.roles.find('name', 'Rules');

      message.member.add.role(role).catch(e => { message.reply(e); });
      message.reply(':white_check_mark: **You have accepted the server rules!**');
    
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