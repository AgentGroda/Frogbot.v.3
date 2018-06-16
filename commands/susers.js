module.exports.run = async (client, message, args) => {

    message.channel.send(`There are **${message.guild.memberCount.toLocaleString()}** members on this server.`);

}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };