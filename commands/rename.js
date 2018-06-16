module.exports.run = async (client, message, args) => {
    try {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You need Administrator permission to use this command!** ') 
        if (!args[0]) return message.channel.send('Please specify a new name for the channel!')
        message.channel.setName(args[0])
        return message.channel.send(`**Successfully updated channel name to ${args[0]}!**`)
    }  catch (error) {
        message.channel.send(`Error: ${error}`)
    }
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };