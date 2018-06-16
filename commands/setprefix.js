
const db = require('quick.db'),
      send = require('quick.hook')

exports.run = (client, message, args) => {

try {
	if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '295231913612804096') return message.channel.send('Sorry, you don\'t have permission to change server prefix')
	.then(msg => msg.delete({
		timeout: 10000
	}));
if (!args.join(' ')) return message.channel.send('Please provide a prefix to change server prefix')
	.then(msg => msg.delete({
		timeout: 10000
	}));

db.set(`prefix_${message.guild.id}`, args.join(' '))
	.then(i => {
	message.channel.send(`Successfully updated prefix to ${i}`)

})
}	catch (err) {
	message.channel.send(`**${err.name}: ${err.message}**`)
}
}
      
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };
