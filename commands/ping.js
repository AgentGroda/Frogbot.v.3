
exports.run = (client, message, args, tools) => {

    message.channel.send('Pong...').then((msg) => {
        msg.edit(`Pong! :ping_pong: Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
         //client.user.setPresence({ game: { name: `Jag är i ${client.guilds.size} servrar! | -hjälp | ${client.users.size} användare`, type: 0 } });


        });
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };