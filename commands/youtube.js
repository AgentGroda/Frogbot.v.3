const snekfetch = require('snekfetch'),
      Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

try {
  const channel = args[0]
  if (!channel) return message.channel.send('Please enter a channel!')

  const { get } = await snekfetch
  const snippet = await get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${channel}&key=AIzaSyA9l-cgTlSMceujTnyVgHtKw5iSQmz4GvY&maxResults=1&type=channel`)
    .catch(e => message.reply(`:no_entry_sign: Your channel was too powerful that I couldn't handle it, try again! Error: ${e}`));
  const data = await get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${snippet.body.items[0].id.channelId}&key=AIzaSyA9l-cgTlSMceujTnyVgHtKw5iSQmz4GvY`)
    .catch(e => message.reply(`:no_entry_sign: Your channel was too powerful that I couldn't handle it, try again! Error: ${e}`));

  const sData = snippet.body.items[0];
  const dData = data.body.items[0];

  const embed = new Discord.MessageEmbed()
    .setColor('#ea5655')
    .setAuthor('YouTube Channel Statistics', 'https://i.imgur.com/1sLSPUr.png')
    .setThumbnail(sData.snippet.thumbnails.high.url)
    .setDescription([
      `❯ **Channel Name:** ${sData.snippet.channelTitle}`,
      `❯ **Channel Description:** ${sData.snippet.description}\n`,
      `❯ **Subscriber Count:** ${parseInt(dData.statistics.subscriberCount).toLocaleString()}`,
      `❯ **Total Views:** ${parseInt(dData.statistics.viewCount).toLocaleString()}`,
      `❯ **Total Videos:** ${parseInt(dData.statistics.videoCount).toLocaleString()}`,
      `❯ **Channel Created:** ${new Date(sData.snippet.publishedAt).toDateString()}\n`,
      `❯ **Link:** [YouTube.com/${sData.snippet.channelTitle}](https://www.youtube.com/channel/${sData.id.channelId})`
    ]);
  message.channel.send(embed);
}   catch (err) {
  
}
  
}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };
  exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };