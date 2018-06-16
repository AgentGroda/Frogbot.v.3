module.exports.run = async (client, message, args) => {
    try {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You need Administrator permission to use this command!** ') 
        if (!args[0]) return message.channel.send('Please specify a time in minutes! `1, 5, 15, 30, 60`')
        //if (!args[0] === '1', '5', '15', '30', '60') return;
        message.guild.setAFKTimeout(args[0] * 60)
        return message.channel.send(`**Successfully set the AFK Timeout to ${args[0]} minutes!**`)
    }  catch (error) {
        message.channel.send(`Error ${error}`)
    }
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };