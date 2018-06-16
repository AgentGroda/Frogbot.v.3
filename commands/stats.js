const Discord = module.require("discord.js")
const { version } = require('discord.js')
const os = require ("os")
const moment = require('moment');
require('moment-duration-format');

module.exports.run = async (client, message, args) => {
 //   const client = this.client;
try {
  const m = await message.channel.send('*Fetching my stats...*');
  const formatUptime = time => moment.duration(time).format('D [days], H [hrs], m [mins], s [secs]');

    let uptime = await client.shard.fetchClientValues('uptime');
    let avgUptime = uptime.reduce((a, b) => a + b, 0) / client.shard.count;

    const memory = await client.shard.broadcastEval('process.memoryUsage().heapTotal');
    let memoryUsage = (memory.reduce((a, b) => a + b, 0) / 1024 / 1024).toFixed(2);

    let CPUUsage = await getCPUUsage();

    const data = [
      `Servers: **${await getTotal(client, 'guilds.size')}**`,
      `Users: **${await getTotal(client, 'users.size')}**`,
      `Channels: **${await getTotal(client, 'channels.size')}**`,
      `Voice Channels: **${await getTotal(client, 'voiceConnections.size')}**`,
      `Average Shard Uptime: **${formatUptime(avgUptime)}**`,
     // `Messages This Session: **${await getTotal(client, 'session.messages')}**`,
     // `Commands This Session: **${await getTotal(client, 'session.commands')}**`,
     // `Guilds This Session: **${await getTotal(client, 'session.guilds')}**`,
    //  `Pokemon Caught This Session: **${await getTotal(client, 'commands.pokemon')}**`,
      `Discord Latency: **${Math.round(client.ping)}** MS`,
      `Message Latency: **${m.createdTimestamp - message.createdTimestamp}** MS`,
      `Memory Usage: **${memoryUsage} / ${(os.totalmem() / 1024 / 1024).toFixed(2)}** MB`,
      `Shard Swap Size: **${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}** MB`,
      `CPU Usage: **${CPUUsage.toFixed(1)}%**`,
      'Operating System: **Windows 10**',
      `Node.js Version: **${process.version}**`,
      'Creator: **AgentGroda#6857**',
      `Discord.js Version **${version}**`
    ];

    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(`${client.user.username} Stats`, client.user.avatarURL())
      .setDescription(data.join('\n'));
    m.edit({ embed });
} catch (err) {
  message.channel.send(`**${err.name}: ${err.message}**`)
}
  }


const getTotal = async (client, value) => {
  let val = await client.shard.fetchClientValues(value);
  return val.reduce((a, b) => a + b, 0).toLocaleString();
}

const getCPUUsage = async () => {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  let [timeUsed0, timeIdle0, timeUsed1, timeIdle1] = new Array(4).fill(0);

  const cpu0 = os.cpus();
  await sleep(1000);
  const cpu1 = os.cpus();

  for (const cpu of cpu1) {
    timeUsed1 += (
      cpu.times.user +
      cpu.times.nice +
      cpu.times.sys
    )
    timeIdle1 += cpu.times.idle;
  }
  for (const cpu of cpu0) {
    timeUsed0 += (
      cpu.times.user +
      cpu.times.nice +
      cpu.times.sys
    )
    timeIdle0 += cpu.times.idle;
  }

  const totalUsed = timeUsed1 - timeUsed0;
  const totalIdle = timeIdle1 - timeIdle0;
  return (totalUsed / (totalUsed + totalIdle)) * 100;
}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };