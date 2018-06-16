const exec = require('child_process').exec;

exports.run = async(client, message, args, level) => {
    if (message.author.id !== "295231913612804096") return message.channel.send("Only owners can use this command")
        message.channel.send('Executing...')
    exec(`${args.join(' ')}`, (error, stdout) => {

      const response = (error || stdout);
      message.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
    });
};
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };