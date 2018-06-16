const Discord = require("discord.js");
var request = require("request")


exports.run = (client, message, params) => {

  if (!params[0]) {
    message.reply('Pls specify a twitch channel!')
      .then(message => {
       // message.delete(5000);
      })
    return;
  };
  if (params[1]) {
    message.reply('Pls specify a twitch channel!')
      .then(message => {
     //   message.delete(5000);
      })
    return;
  };
  var cat = `https://twitchrss.appspot.com/vod/${params[0]}`

  request({
    url: cat,
    json: true
  }, function(error, response, body) {
    var plaatje = body.search('img src') + 9
    var plaatje2 = body.search('.jpg') + 4
    var plaatje3 = body.slice(plaatje, plaatje2)

    var bestaathet = body.search('<rss')
    if (bestaathet == -1) return message.reply(params[0] + ' is not an existing twitch channel!');
    var live = body.search('- LIVE')
    if (live == -1) return message.reply(params[0] + ' is not live!');

    var streamer = body.search('\'s Twitch video')
    var titel = (body.search('em><title>') + 10);
    var streamer1 = body.slice(35, streamer)
    var titel1 = body.slice(titel, live)


    const embed = new Discord.MessageEmbed()
      .setColor(0xe56e32)
      .setTitle(`Streamer: ${streamer1}`)
      .setDescription(` \n**Link**\nhttps://twitch.tv/${params[0]}\n\n**Stream Title**\n${titel1}`)
      .setThumbnail('https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697028-twitch-128.png')
      .setImage(plaatje3)
message.channel.send(embed)
  })

};
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };