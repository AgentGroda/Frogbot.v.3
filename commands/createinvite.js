module.exports.run = async (client, message, args) => {
    try {
        message.channel.createInvite({ maxAge: 0})
        .then(invite => message.channel.send(`**Here is the invite for the channel! <https://discord.gg/${invite.code}>**`)) 
    } catch (error) {
        message.channel.send(error)
   console.log(error)
    }
    //message.channel.createInvite(0)
  //.then(invite => console.log(`Created an invite with a code of ${invite.code}`))
 // .catch(console.error);

}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };