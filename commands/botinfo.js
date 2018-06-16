const Discord = module.require("discord.js")
const { version } = require('discord.js'),
      send = require('quick.hook'),
      { Command } = require('discord.js-commando')
const moment = require('moment');
require('moment-duration-format');

module.exports.run = async (client, message, args) => {

      
    let shard = await client.shard.id +1;
  
    let guilds = await client.shard.fetchClientValues('guilds.size');
    guilds = guilds.reduce((prev, val) => prev + val, 0);
    let users = await client.shard.fetchClientValues('users.size');
    users = users.reduce((prev, val) => prev + val, 0);
  
 //   const used = process.memoryUsage().heapUsed / 1024 / 1024;
  
    const cpu = process.cpuUsage().system / 1024 / 1024;
  
    let voiceConnections = await client.shard.fetchClientValues('voiceConnections.size');
    voiceConnections = voiceConnections.reduce((prev, val) => prev + val, 0);
  
   let channels = await client.shard.fetchClientValues('channels.size');
    channels = channels.reduce((prev, val) => prev + val, 0);
  
      const uptime = await client.shard.fetchClientValues('uptime');
    const averageUptime = uptime.reduce((prev, val) => prev + val, 0) / client.shard.count;
  
   // let sessionGuilds = await client.shard.fetchClientValues('session.guilds');
    //sessionGuilds = sessionGuilds.reduce((prev, val) => prev + val, 0);
      const m = await message.channel.send('```Fetching my stats...```');
    let embed = new Discord.MessageEmbed()
     .setAuthor(client.user.username + ' Statistics', client.user.avatarURL)
     .addField('On All Shards:', `Servers: **${guilds.toLocaleString()}** | Users: **${users.toLocaleString()}** | Channels: **${channels.toLocaleString()}** | Connections: **${voiceConnections.toLocaleString()}**`, true)
     .addField(`On Shard ${client.shard.id + 1}/${client.shard.count}:`, `Servers: **${client.guilds.size.toLocaleString()}** | Users: **${client.users.size.toLocaleString()}** | Channels: **${client.channels.size.toLocaleString()}** | Connections: **${client.voiceConnections.size.toLocaleString()}**`, true)
     .addField('Average Shard Uptime:', moment.duration(averageUptime).format(' D [days], H [hrs], m [mins], s [secs]'))
   //  .addField('Guilds This Session:', sessionGuilds.toLocaleString())
     .addField('Message Latency:', `${m.createdTimestamp - message.createdTimestamp} MS`, true)
     .addField('Discord Latency:', `${Math.round(client.ping)} MS`, true)
     .addField('Discord.js Version:', `${version}`, true)
    .addField("Node Version:", `${process.version}`, true)
     .addField('Memory Usage:', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
     .addField('CPU Usage', `${Math.round(cpu * 100) / 100}%`, true)
     .addField('Creator:', 'AgentGroda#6857')
     .setColor('RANDOM')



m.edit({ embed }).catch( error => message.channel.send(`**ERROR:** ${error.message}`))
}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };