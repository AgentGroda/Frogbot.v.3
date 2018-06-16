const send = require('quick.hook')
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {

const embed = new Discord.MessageEmbed()
.setDescription('Test')

send(message.channel, embed, {

  name: 'Test Webhook',
  icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/quote-512.png'
})
}
