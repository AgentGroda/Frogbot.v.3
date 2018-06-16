module.exports.run = async (client, message, args) => {
  
try {

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (user) return message.channel.send(`Here is the id for **${user.user.username}**: **${user.id}**`)
    else {
    message.channel.send(`Here is the id for **${message.author.username}**: **${message.author.id}**`)
    }
} catch (err) {
    message.channel.send(`Error: ${err.name}: **${err.message}**`)
}

}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };