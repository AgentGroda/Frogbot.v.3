const superagent = require('superagent');
module.exports.run = async (client, message, args) => {

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Please specify a suggestion!')
    const content = clean(`**${message.author.username}**#${message.author.discriminator} (${message.author.id}) suggested:\n${bug}\nServer: **${message.guild.name}**\nID: **${message.guild.id}**`);
    const id = '438389421411270666';
    new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
        .set('Authorization', `Bot ${client.token}`).send({ content })
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('There was an error while sending your suggestion to Frogbot Support. Please try again later.');
          } else {
            resolve(res);
            message.channel.send(`:white_check_mark: **${message.author.username}**, your suggestion has successfully been submitted to Frogbot Support for review. Thank you!.`);
          }
        });
    });
}  catch (err) {
console.log(err)
}
}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };