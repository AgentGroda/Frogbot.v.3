const discord = require ("discord.js");

exports.run = async (client, msg, args) => {

	 let sa = require ("superagent");

    let {body} = await sa
    .get(`https://status.discordapp.com/`);

    let o = new discord.MessageEmbed()
        .setColor(0xFFFFFF)
        .setDescription("**" + body + "**")
    msg.channel.send(o)
	
}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };