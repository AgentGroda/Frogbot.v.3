var asciify = require('figlet')
exports.run = (client, message, args, func) => {
    let data = message.content.split(" ").slice(1).join(" ");

asciify(`${data}` , function(err, res){ message.channel.send(`\`\`\`${res}\`\`\``) });



}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };