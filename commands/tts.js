const tts = require('google-tts-api');
const path = require('path');
const snekfetch = require('snekfetch');
module.exports.run = async (client, message, args) => {  
//  let bug = args[0]
 // console.log(args[1])
  let tts1 = message.content.split(" ").slice(1).join(" ");
  if (!tts1) return message.channel.send('Please enter a text to tts!')
  const emoji = "🇸🇪"
const emoji1 = "🇬🇧"
const emoji2  = "🇫🇮"
const emoji3 = "🇪🇸"
let muterole = message.guild.roles.find(role => role.name === 'Spotify');
message.channel.send('**Please choose a language with the reaction.** (If you want to add a language, please use the `=suggest` command to suggest a language.)')
.then( msg => {

msg.react(emoji).then( r => {
msg.react(emoji1).then(g => {


msg.react(emoji2).then(o => {


msg.react(emoji3)
  
  const sweden = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const england = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
  const finish = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
  const spanien = (reaction, user) => reaction.emoji.name === emoji3 && user.id === message.author.id;
  
  const swe = msg.createReactionCollector(sweden, { time: 10000 });
  const eng = msg.createReactionCollector(england, { time: 10000 });
  const fin = msg.createReactionCollector(finish, { time: 10000 });
  const spa = msg.createReactionCollector(spanien, { time: 10000 });

  

  swe.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
          //  user.roles.add(muterole)
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `sv`, 1)
          .then((url) => {
            const dispatcher = connnection.play(url);
            message.react('📢');
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })
  
  swe.on('end', r => {
        return;
        
         })
  eng.on('collect', r => {
              const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `en`, 1)
          .then((url) => {
            const dispatcher = connnection.play(url);
            message.react('📢');
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })

  
    fin.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `fi`, 1)
          .then((url) => {
            const dispatcher = connnection.play(url);
            message.react('📢');
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {

            voiceChannel.leave();
          });
        });
       } else {
         message.channel.send(':no_entry_sign: Sorry but it seems like I\'m already playing something on this server.');
       }
  })
      spa.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `es`, 1)
          .then((url) => {
            const dispatcher = connnection.play(url);
            message.react('📢');
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })
  
})
})

})
})
}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };
