module.exports.run = async (client, message) => {
    let args = message.content.split(" ").slice(1).join(" ");

   const gif = args.replace(' ', '-');
    const m = await message.channel.send('*Searching...*').then( m => {
      m.edit(`:clapper: **${message.author.username}**, http://giphy.com/search/${gif}`);
    })
  }
  exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };
