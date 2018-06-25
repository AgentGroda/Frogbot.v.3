module.exports.run = async(client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There currently isn\'t any music playing in this guild!')
    

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let u = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**Queue**__\n`;

    for (var i = 1; i < queue.length; i++) {
        u += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`
    }
    message.channel.send(u)
}
