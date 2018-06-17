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
    })


    client.on('message', async message => {  
      if(!message.guild) return;
	 var prefix = '=' //Default prefix
	let fetched = await db.fetch(`prefix_${message.guild.id}`);
	if (fetched === null) prefix = '='
	else prefix = fetched;	//Custom prefix.
      
             const id = message.guild.members.get('364071140034871296');   
      if (message.content.startsWith(id)) {
      db.fetch(`guildprefix_${message.guild.id}`).then(p => {
      message.channel.send(`The prefix on this server is **${prefix}**`)
      }) //If bot mention return this.
      
    }
try {
    let messages = new db.table('messages');
    let a = '1'
    let targetBalnce = await messages.fetch(`messagesSent_${message.author.id}`)
    let b = targetBalnce + 1;)
   messages.set(`messagesSent_${message.author.id}`, b)
}   catch (e) {
    
}//Message Count

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
});//If new guild return;

		//GuildMember Events
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
    client.login(process.env.BOT_TOKEN)//Login to your bot account.



