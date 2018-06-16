const moment = require('moment'); 
require('moment-duration-format');
module.exports.run = async (client, message, args) => {
const zone = args.join(' ')

try {

if (!zone) return message.channel.send('**Please specify a time-zone.** **You can use this list for find your time-zone** https://en.wikipedia.org/wiki/List_of_tz_database_time_zones')

message.channel.send(`**${new Date().toLocaleString('en-US', { timeZone: `${zone}` })}**`)


} catch (error) {

  return message.channel.send(`**Error:** ${error}`)

}



}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };
