const PlexiDevApi = require('plexibotsapi');
let api = new PlexiDevApi('BWq7eDc4CVByuEdktDpjD-Q.Oo7E3SIQWml9FtgCpjcFGMOeTo');
module.exports.run = async (client, message, args) => {
const bot = api.fetchBotInfo('364071140034871296') 
  console.log(bot)

}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };