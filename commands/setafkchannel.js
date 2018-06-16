module.exports.run = async (client, message, args) => {

    try {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You need Administrator permission to use this command!** ') 
        if (!args[0]) return message.channel.send('Please specify a voice channel!')

        message.guild.setAFKChannel(args[0])
        return message.channel.send(`**Successfully set the AFK channel to ${args[0]}!**`)
    } catch (error) {
        message.channel.send(`Error ${error}`)
    }
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };