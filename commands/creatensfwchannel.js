module.exports.run = async (client, message, args) => {
    try {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You need Administrator permission to use this command!** ') 
        let guild = message.guild;
        if (!args[0]) return message.channel.send('**Please specify a name for the channel!**')
   //     if (!args[1]) return message.channel.send('**Please specify type of channel!** `text`')
    
        message.guild.channels.create(`${args[0]}`, { nsfw: true, type: 'text' })
        return message.channel.send(`Successfully created a nsfw channel with the name **${args[0]}**`)
    } catch (error) {
        message.channel.send(`Error: ${error}`)
    
    }
    
    
    }
    exports.conf = {
        aliases: ['example', 'chexample']
        };
       
        exports.help = {
        name: 'example', description: 'hello this is description', usage: 'example'
        };