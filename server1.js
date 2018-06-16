const Discord = require('discord.js')
const db = require('quick.db')
const tools = require('./functions.js')
const express = require('express')
const app = express();
const http = require('http')
const snekfetch = require('snekfetch');
const func = require('./functions.js')
//const send = require('quick.hook')
const { oneLine, stripIndents } = require('common-tags');
const client = new Discord.Client();
//const queue = new Map()
const prefix = ['=']
const superagent = require('superagent') 
const PlexiDevApi = require('plexibotsapi');
let api = new PlexiDevApi(process.env.PLEXI_TOKEN);
const queue = new Map();
const ytdl = require('ytdl-core')
const Youtube = require('simple-youtube-api')

const youtube = new Youtube(process.env.YOUTUBE_TOKEN)
const { Util } = require('discord.js')
const fs = require('fs')
var opusscript = require("opusscript");
const send = require('quick.hook')






client
  .on('error', err => {
console.log(err)
})
  

  
  
    client.on("ready", async () => {




      
        console.log(oneLine`
    Shard ${client.shard.id + 1}/${client.shard.count} ready!
    On ${client.guilds.size.toLocaleString()} guilds w/ ${client.users.size.toLocaleString()} users.`);
      
        client.user.setActivity('Try =profile')
      

//async function setActivity() {
    //Variable Array for what the setGame can be set to
           // const guilds = await client.shard.fetchClientValues('guilds.size');
 //   var Gameinfo = [`prefix: ${prefix}`, `Running on ${client.guilds.size} Servers`, `Running Commands`, `Try ${prefix}help`, `${prefix}help`,
   //     `Using ${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}Mb's of RAM`, `Ping to API: ${Math.round(client.ping)} Ms`, `${prefix}invite` // Change these to what you want, add as many or as few as you want to
   // ]

   // var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

  //  client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array

       // console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.

//}

//setInterval(setActivity, 120000) //sets and picks a new game every 2 minutes
      
      


      
      
console.log(`Bot is ready! ${client.user.username}`)




 //   snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
 //   .set('Authorization', key)
 //   .send({ server_count: client.guilds.size, 
 //         shard_count: client.shard.count, 
  //  shard_id: client.shard.id })
   // .then(() => console.log(`Posted to dbl.`))
    //.catch((e) => console.error(e));
    //})


    })


    client.on('message', async message => {
      
      
      if(!message.guild) return;

      
      var prefix = '='
let fetched = await db.fetch(`prefix_${message.guild.id}`);
if (fetched === null) prefix = '='
else prefix = fetched;
      
             const id = message.guild.members.get('364071140034871296');   
      if (message.content.startsWith(id)) {
      db.fetch(`guildprefix_${message.guild.id}`).then(p => {
      message.channel.send(`The prefix on this server is **${prefix}**`)

      }) 
      
    }
try {
    let messages = new db.table('messages');
    let a = '1'
    let targetBalnce = await messages.fetch(`messagesSent_${message.author.id}`)
    let b = targetBalnce + 1;
   // console.log(targetBalnce)
   // console.log(b)
   messages.set(`messagesSent_${message.author.id}`, b)
}   catch (e) {
    
}



      
      let afk = new db.table('AFKs');

// Check if author is AFK
let authorStatus = await afk.fetch(message.author.id);

if (authorStatus) { // Run if they are AFK

  const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setFooter(`${message.author.username} is no longer AFK.`)
	
  // Send a 'You are no longer AFK message'
  message.channel.send(embed).then(i => i.delete({
    timeout: 5000
  }))
  
  // This will delete the user from the AFK pool in the database
  afk.delete(message.author.id);

}

let mentioned = message.mentions.members.first(); // This will store the first member mentioned
if (mentioned) { // This will run if a member is mentioned

  // Access AFK Status
  let status = await afk.fetch(mentioned.id);

  if (status) { // This will run if they are AFK (since the db will return true)

    // Form Embed
    const embed = new Discord.MessageEmbed()
      .setColor(0xffffff)
      .setFooter(status);

    // Send Embed
    message.channel.send(embed);

  }

}

      
      
   //   async function setActivity() {
    //Variable Array for what the setGame can be set to
            const guilds = await client.shard.fetchClientValues('guilds.size');
   // var Gameinfo = [`prefix: ${prefix}`, `Running on ${guilds} Servers`, `Running Commands`, `Try ${prefix}help`, `${prefix}help`,
        `Using ${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}Mb's of RAM`, `Ping to API: ${Math.round(client.ping)} Ms`, `${prefix}invite` // Change these to what you want, add as many or as few as you want to
   // ]

    //var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    //client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array

       // console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.

//}

//setInterval(setActivity, 120000)

      //  db.fetch(`guildprefix_${message.guild.id}`).then(o => {

       //     let prefix
//
       //   if (o.text) {
       //         prefix = o

       //    } else {
         //      prefix = '='
         //   }
       // })
      
      
    //  let fetched = await db.fetch(`prefix_${message.guild.id}`);
   ///   if (fetched === null) prefix = '=';
     // else prefix = fetched;

          


      
        client.user.setStatus('online')

        let msg = message.content.toUpperCase();
        let sender = message.author;
    
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();
    
        if (!msg.startsWith(prefix)) return;
        if (message.author.bot) return;
        //Command Handler
    
        try {
    
            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(client, message, args)
        }   catch (e) {
    
        }
        

  



    

client.on('guildCreate', guild => {

console.log(`I've joined ${guild.name} server with ${guild.memberCount}`)
});




    client.on('message', async msg => {
      // if (msg.author.id === "295231913612804096" || msg.member.roles.some(r => ["Logan DJ", "The Music Meister"].includes(r.name))) {
           if (!msg.content.startsWith(prefix)) return undefined;
           const args = msg.content.split(' ');
           const searchString = args.slice(1).join(' ');
           var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
           const serverQueue = queue.get(msg.guild.id);
           let command = msg.content.toLowerCase().split(' ')[0];
           command = command.slice(prefix.length)
           if (command === 'play') {
               const voiceChannel = msg.member.voiceChannel;
               if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!')

        
               if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                   const playlist = await youtube.getPlaylist(url);
                   const videos = await playlist.getVideos();
                   for (const video of Object.values(videos)) {
                       const video2 = await youtube.getVideoByID(video.id);
                       await handleVideo(video2, msg, voiceChannel, true);
                   }
                   return message.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`)
               } else {
                   try {
                       var video = await youtube.getVideo(url);
                   } catch (error) {
                       try {
                           var videos = await youtube.searchVideos(searchString, 10);
                           let index = 0;
                           message.channel.send(`
   __**Song selection:**__
   ${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
   Please provide a value to select one of the 🔎 results ranging from 1-10.
             `)
                           try {
                               
                               var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                   max: 1,
                                   time: 10000,
                                   errors: ['time']
                               });
                           } catch (err) {
                               console.error(err);
                               return message.channel.send('No or invalid value entered, cancelling video selection.')
                           }
                           const videoIndex = parseInt(response.first().content);
                           var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                       } catch (err) {
                           console.error(err);
                           return message.channel.send('🆘 I could not obtain any search results.')
                       }
                   }
                   return handleVideo(video, msg, voiceChannel);
               }
           
        
           } else if (command === 'skip') {
               if (!msg.member.voiceChannel) return message.channel.send('You are not in a voice channel!')
               if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.')
               serverQueue.connection.dispatcher.end('Skip command has been used!');
               return undefined;
           } else if (command === 'stop') {
               if (!msg.member.voiceChannel) return message.channel.send('You are not in a voice channel!')
               if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.')
               serverQueue.songs = [];
               serverQueue.connection.dispatcher.end('Stop command has been used!');
               return undefined;
           } else if (command === 'volume' || command === 'vol') {
               if (!msg.member.voiceChannel) return message.channel.send('You are not in a voice channel!')
               if (!serverQueue) return send(message.channel, 'There is nothing playing.', {
                   name
               });
               if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
               serverQueue.volume = args[1];
               serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
               var volval;
               if (serverQueue.volume == 1) {
                   volval = `○──── :loud_sound:⠀`
               }
               if (serverQueue.volume == 2) {
                   volval = `─○─── :loud_sound:⠀`
               }
               if (serverQueue.volume == 3) {
                   volval = `──○── :loud_sound:⠀`
               }
               if (serverQueue.volume == 4) {
                   volval = `───○─ :loud_sound:⠀`
               }
               if (serverQueue.volume == 5) {
                   volval = `────○ :loud_sound:⠀`
               }
               msg.channel.send(volval)
   
           } else if (command === 'np') {
               if (!serverQueue) return msg.channel.send('There is nothing playing.');
               return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}** ${serverQueue.connection.dispatcher.status}`);
           } else if (command === 'queue') {
               if (!serverQueue) return msg.channel.send('There is nothing playing.');
               return msg.channel.send(`
   __**Song queue:**__
   ${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
   **Now playing:** ${serverQueue.songs[0].title}
       `);
           } else if (command === 'pause') {
               if (serverQueue && serverQueue.playing) {
                   serverQueue.playing = false;
                   serverQueue.connection.dispatcher.pause();
                   return msg.channel.send('⏸ Paused the music for you!');
               }
               return msg.channel.send('There is nothing playing.');
           } else if (command === 'resume') {
               if (serverQueue && !serverQueue.playing) {
                   serverQueue.playing = true;
                   serverQueue.connection.dispatcher.resume();
                   return msg.channel.send('▶ Resumed the music for you!');
               }
               return msg.channel.send('There is nothing playing.');
           }
           return undefined;
       
             
   });
   async function handleVideo(video, msg, voiceChannel, playlist = false) {
       const serverQueue = queue.get(msg.guild.id);
     //  console.log("MOOOOSIK");
       const song = {
           id: video.id,
           title: Util.escapeMarkdown(video.title),
           url: `https://www.youtube.com/watch?v=${video.id}`
       };
       if (!serverQueue) {
           const queueConstruct = {
               textChannel: msg.channel,
               voiceChannel: voiceChannel,
               connection: null,
               songs: [],
               volume: 5,
               playing: true
           };
           queue.set(msg.guild.id, queueConstruct);
           queueConstruct.songs.push(song);
           try {
               var connection = await voiceChannel.join();
               queueConstruct.connection = connection;
               play(msg.guild, queueConstruct.songs[0]);
           } catch (error) {
               console.error(`I could not join the voice channel: ${error}`);
               queue.delete(msg.guild.id);
               return msg.channel.send(`I could not join the voice channel: ${error}`);
           }
       } else {
           serverQueue.songs.push(song);
        //   console.log(serverQueue.songs);
           if (playlist) return undefined;
           else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
       }
       return undefined;
   }
   
   function play(guild, song) {
       const serverQueue = queue.get(guild.id);
       if (!song) {
           serverQueue.voiceChannel.leave();
           queue.delete(guild.id);
           return;
       }
      // console.log(serverQueue.songs);
       const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('end', reason => {
           if (reason === 'Stream is not generating quickly enough.') console.log(reason);
           else console.log(reason);
           serverQueue.songs.shift();
           play(guild, serverQueue.songs[0]);
       }).on('error', error => console.error(error));
       var volval;
       if (serverQueue.volume == 1) {
           volval = `○──── :loud_sound:⠀`
       }
       if (serverQueue.volume == 2) {
           volval = `─○─── :loud_sound:⠀`
       }
       if (serverQueue.volume == 3) {
           volval = `──○── :loud_sound:⠀`
       }
       if (serverQueue.volume == 4) {
           volval = `───○─ :loud_sound:⠀`
       }
       if (serverQueue.volume == 5) {
           volval = `────○ :loud_sound:⠀`
       }
       dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
     const Discord = require('discord.js')
      var NowEmbed = new Discord.MessageEmbed().setColor("990033")
      .addField(`=========================================================`,`
   ɴᴏᴡ ᴘʟᴀʏɪɴɢ: **${song.title}**
   :white_circle:─────────────────────────────────────────── 
   ◄◄⠀▐▐ ⠀►►⠀⠀　　${volval}    　　 :gear: ❐ ⊏⊐ 
   ========================================================= `)
    //  .setFooter("Invite Me! Using l.invite")
   //.addField("Logans Server","https://discord.gg/6mvvfSm")
      // .addField("The Music Setup was taken from","**Logan**: [Invite](https://discordapp.com/oauth2/authorize?client_id=408070424484904960&scope=bot&permissions=2146958591)");
       serverQueue.textChannel.send(NowEmbed);
   
   }



   client.on('guildMemberAdd', member => {
    if (!member.guild.available) return;

    db.fetch(`messageChannel_${member.guild.id}`).then(i => {


                if (!member.guild.channels.get(i)) return;
                const channel1 = member.guild.channels.get(i)

                db.fetch(`joinMessage_${member.guild.id}`).then(p => {
                    const welcomeembed = new Discord.MessageEmbed()
                    .setAuthor('User Joined')
                    .setDescription(p.replace('{user}', member.user.tag).replace('{members}', member.guild.memberCount))
                    .setColor(0x1D8286)
                
                   channel1.send(welcomeembed) 
                   
                })
        })
   })



   client.on('guildMemberRemove', member => {
    if (!member.guild.available) return;

    // Fetch Channel
    db.fetch(`messageChannel_${member.guild.id}`).then(i => {

        // If the channel is not found, return.
        if (!member.guild.channels.get(i)) return;
        const channel2 = member.guild.channels.get(i)

        // Fetch Leave Message
        db.fetch(`leaveMessage_${member.guild.id}`).then(o => {
            
            // Check if o.text is defined
            if (!o) return;
            const embed = new Discord.MessageEmbed()
            .setAuthor('User Left')
            .setDescription(o.replace('{user}', member.user.tag).replace('{members}', member.guild.memberCount))
            .setColor(0x1D8286)
            channel2.send(embed)
            

        })

    })

})


});



    client.login(process.env.BOT_TOKEN)



