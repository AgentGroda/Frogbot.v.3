const moment = require('moment');
require('moment-duration-format');
module.exports.run = async (client, message, args) => {
    
try {
  const formatUptime = time => moment.duration(time).format('D [days], H [hrs], m [mins], s [secs]');
const evalstr = `[this.shard.id, this.guilds.size, this.users.size, this.channels.size, this.voiceConnections.size, this.uptime, (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2), process.memoryUsage().heapTotal]`;
const shard = client.shard;
const result = await shard.broadcastEval(evalstr);

let guilds = result.map(r => r[1]);
let users = result.map(r => r[2]);
let channels = result.map(r => r[3]);
let voiceConnections = result.map(r => r[4]);
let uptime = result.map(r => r[5]);
let memory = result.map(r => r[7]);
let totalMemory = (memory.reduce((a, b) => a + b, 0) / 1024 / 1024).toFixed(2);
let avgUptime = uptime.reduce((a, b) => a + b, 0) / shard.count;

const shards = new Array();
result.forEach((r, i) => {
  if (r[0] === shard.id) shards.push(`*${r[0] + 1} : G ${r[1]}, U ${r[2]}, C ${r[3]}, VC ${r[4]}, UP ${formatUptime(r[5])}, M ${r[6]}`);
  else shards.push(` ${r[0] + 1} : G ${r[1]}, U ${r[2]}, C ${r[3]}, VC ${r[4]}, UP ${formatUptime(r[5])}, M ${r[6]}`);
});
//const shards = `${result.map(r => `${r[0]+1} : G ${r[1]}, U ${r[2]}, C ${r[3]}, VC ${r[4]}, UP ${formatUptime(r[5])}, M ${r[6]}`).join('\n')}`;
const total = ` T : G ${guilds.reduce((a, b) => a + b, 0)}, U ${users.reduce((a, b) => a + b, 0)}, C ${channels.reduce((a, b) => a + b, 0)}, VC ${voiceConnections.reduce((a, b) => a + b, 0)}, UP ${formatUptime(avgUptime)}, M ${totalMemory}`;

message.channel.send(`= Shard Info =\n${shards.join('\n')}\n${total}`, { code: 'prolog'});
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