module.exports.run = async (client, message, args) => {
            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        }

}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };