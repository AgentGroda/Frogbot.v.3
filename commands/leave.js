exports.run = (client, message, args) => {   
// Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave()
         // message.reply('I have successfully leaved the channel!'
                        
 
    }
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };
                        