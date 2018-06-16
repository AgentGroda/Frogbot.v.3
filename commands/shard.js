module.exports.run = async (client, message, args) => {

    try {
        message.channel.send(`**${message.author.username}**, you are on shard **${client.shard.id + 1}/${client.shard.count}**.`);
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