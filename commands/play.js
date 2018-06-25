const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const Youtube = require('simple-youtube-api')

const youtube = new Youtube('AIzaSyA9l-cgTlSMceujTnyVgHtKw5iSQmz4GvY')

exports.run = async(client, message, args, ops) => {

    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
    // Return & send a message to the channel.


    // Check if author input a URL
    if (!args[0]) return message.channel.send('Sorry, please input a url following the command.');
    var video1 = await youtube.searchVideos(args.join(" "), 1);
    const videoIndex = parseInt(1)



        var video = await youtube.getVideoByID(video1[videoIndex - 1].id);

       // console.log(video.id)
       const ul = `https://www.youtube.com/watch?v=${video.id}`


    // Validate Info



    //let info = await ytdl.getInfoByID(video);

    let data = ops.active.get(message.guild.id) || {};


    if (!data.connection) data.connection = await message.member.voiceChannel.join();

    if (!data.queue) data.queue = [];


    data.guildID = message.guild.id;
    data.queue.push({
        songTitle: video.title,
        requester: message.author.tag,
        url: ul,
        announceChannel: message.channel.id
    

    });



    if (!data.dispatcher) play(client, ops, data);
    else {
        message.channel.send(`Added To Queue: ${video.title} | Requested By: ${message.author.tag}`);
      //  console.log(data)
    }
    ops.active.set(message.guild.id, data)
}

async function play(client, ops, data) {

    client.channels.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle} | Requested By: ${data.queue[0].requester}`)


    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, { filter: 'audioonly' }));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('finish', function() {
        finish(client, ops, this);
    });
}

function finish(client, ops, dispatcher) {

        let fetched = ops.active.get(dispatcher.guildID);

        fetched.queue.shift();

        if (fetched.queue.length > 0) {

            ops.active.set(dispatcher.guildID, fetched);
            play(client, ops, fetched)
            
        }   else {
            ops.active.delete(dispatcher.guildID);

            let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
            if (vc) vc.leave();
        }
    }