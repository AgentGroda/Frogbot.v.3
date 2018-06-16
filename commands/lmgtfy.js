const encode = require('strict-uri-encode'),
      send = require('quick.hook')

exports.run = (client, message, args, tools) => {

  let question = encode(args.join(' '));
  
  let link = `https://www.lmgtfy.com/?q=${question}`;
  
message.channel.send(`<${link}>`)
 // message.channel.send(`**<${link}>**`)
      .catch( error => message.channel.send(`**ERROR:** ${error.message}`))
}
exports.conf = {
      aliases: ['example', 'chexample']
      };
     
      exports.help = {
      name: 'example', description: 'hello this is description', usage: 'example'
      };