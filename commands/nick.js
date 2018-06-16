module.exports.run = async (client, message, args) => {

try {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   //if (args[0]) return message.channel.send('**Please enter a nickname!**')
    user.setNickname('Test')
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