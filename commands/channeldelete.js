module.exports.run = async (client, message, args) => {

     try {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You need Administrator permission to use this command!** ') 
     //   let newChannel = message.mentions.channels.first().id
        message.channel.delete()
        return;
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