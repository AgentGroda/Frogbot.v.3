module.exports.run = async (client, message, args) => {

try {
    message.channel.send(`Tja ${message.author.username}!`)
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