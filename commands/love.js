const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let user1 = args[0];
if(!user1) return message.reply("Please mention two users to ship!");
let user2 = args[1];
if(!user2) return message.reply("Please mention a second user!");

let result = Math.floor(Math.random() * 100) + 1;

message.channel.send(`❣ **MATCHMAKING** ❣\n🔻 ${user1} \n🔺 ${user2}`);

let aEmbed = new Discord.MessageEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Awful 😭`);

let bEmbed = new Discord.MessageEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Bad 😢`);

let ltaEmbed = new Discord.MessageEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Worse Than Average 😐`);

let nbEmbed = new Discord.MessageEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Not Bad 🙂`);

let pgEmbed = new Discord.MessageEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Pretty Good 😃`);

let goEmbed = new Discord.MessageEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Good 😄`);

let gEmbed = new Discord.MessageEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Great 😊`);

let pEmbed = new Discord.MessageEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Perfect 😍`);

if(result <= 15) return message.channel.send(aEmbed)
if(result <= 30) return message.channel.send(bEmbed)
if(result <= 50) return message.channel.send(ltaEmbed)
if(result <= 60) return message.channel.send(nbEmbed)
if(result <= 70) return message.channel.send(pgEmbed)
if(result <= 80) return message.channel.send(goEmbed)
if(result <= 90) return message.channel.send(gEmbed)
if(result >= 90) return message.channel.send(pEmbed)


//with a chance of ${lol} getting ${baby} babies.
//message.channel.send(`❣ **MATCHMAKING** ❣\n🔻 ${user1} \n🔺 ${user2}`);
//message.channel.send(shipEmbed);

}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };
