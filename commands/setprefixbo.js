const db = require('quick.db'),
      send = require('quick.hook')
exports.run = (client, message, args) => {

if (message.author.id === '295231913612804096') {
    if (!args.join(" ")) return send(message.channel, 'Please enter arguments. `setPrefix <prefix>`', {
         name: 'Prefix Error',
         icon: 'https://i.imgur.com/X9eAmHm.png'
       })  //message.channel.send('Please enter arguments. `setPrefix <prefix>`'); // Tell them if they didn't supply any arguments.
    db.set(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => { // Update the text field in that ID. .trim() removes the whitespaces on both side.

       send(message.channel, '**Prefix changed to** ' + i.text , {
         name: 'Prefix Changed',
         icon: 'https://i.imgur.com/X9eAmHm.png'
       }) //message.channel.send('**Prefix changed to** ' + i.text); // Post in chat with the new prefix!

    }).catch( error => message.channel.send(`**ERROR:** ${error.message}`))

}
}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };