const PlexiDevApi = require('plexibotsapi');
let api = new PlexiDevApi('BWq7eDc4CVByuEdktDpjD-Q.Oo7E3SIQWml9FtgCpjcFGMOeTo');
module.exports.run = async (client, message, args) => {
  
      if(message.author.id !== '295231913612804096') return;
  
    const getTotal = async (client, value) => {
  let val = await client.shard.fetchClientValues(value);
  return val.reduce((a, b) => a + b, 0).toLocaleString();
}


try {
  api.postServers(client.user.id, `${await getTotal(client, 'guilds.size')}`);
  api.postUsers(client.user.id, `${await getTotal(client, 'users.size')}`); // This will run it once first, the setInterval will then run it every 15 minutes.
  setInterval(function() {
    api.postServers(client.user.id, client.guilds.size);
    api.postUsers(client.user.id, client.users.size);
  }, 900000);
  
  message.channel.send('Posting to <https://bots.plexidev.org>...')
}   catch (err) {
  message.channel.send(`**${err.name}: ${err.message}**`)
}
  
  


}

exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };