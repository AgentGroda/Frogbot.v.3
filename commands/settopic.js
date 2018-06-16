module.exports.run = async (client, message, args) => {

    try {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You need Administrator permission to use this command!** ') 
        let topic = message.content.split(" ").slice(1).join(" ");
        if (!args) return message.channel.send('**Please specify a topic!**')
        message.channel.setTopic(topic)
        return message.channel.send(`Successfully set the channel topic to **${topic}**!`)
    } catch (error) {
        message.channel.send(error)
    }
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };