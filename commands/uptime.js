const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
try {
    let uptime = client.uptime;
    
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
    const embed = new Discord.MessageEmbed()
      .setAuthor("Bot's uptime:")
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/3/37/Clock.gif')
      .setTimestamp()

      .addField('Days:', `${days}`)
      .addField('Hours:', `${hours}`)
      .addField('Minutes:', `${minutes}`)
      .addField('Seconds:', `${seconds}`)
      .setColor("RANDOM")


message.channel.send(embed)
}   catch (e) {
    message.channel.send(`**${e.name}: ${e.message}**`)
}
        }
        exports.conf = {
            aliases: ['example', 'chexample']
            };
           
            exports.help = {
            name: 'example', description: 'hello this is description', usage: 'example'
            };