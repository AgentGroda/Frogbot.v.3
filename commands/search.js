const cheerio = require('cheerio')
	, snekfetch = require('snekfetch')
	, querystring = require('querystring');
	const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

	let Embed = new Discord.MessageEmbed()
	.setColor(0x36393e);

if (!args[0]) {
	Embed.setFooter(`Incorrect usage: Upseach < 1+ characterSeach >`)
	return message.channel.send(Embed); // Make sure the user is actually searching a user.
}

if (args[0].length <= 1) {
	Embed.setFooter(`Incorrect usage: Upseach < 1+ characterSeach >`)
	return message.channel.send(Embed); // If the arg length is 1 the array length will without doubt exceed 32 which we should try avoid.
}

let array = []; // Making an empty array.

let number = 0; // Setting the number to 0 so we can add 1 per user. Example: 1. User 2. User 3. User
message.guild.members.map(m => { // Returns an array containing all users in the guild.
	if (m.user.username.toUpperCase().includes(args[0].toUpperCase())) { // Filtering it so only the users with what the user is searching for is added to the array.
		number++; // Increasing the number by 1 per user.
		array.push(`${number}. ${m.user.username}`); // Pushing each user into the array in a format. Example: 5. Mio / Μισάνθρωπος. . 
		//We can change this to include the discriminator by doing array.push(`${number}. ${m.user.username}${m.user.discriminator}`)
	}
});

Embed.setTitle(`Results for "${args[0]}"`)
Embed.setDescription(`\`\`\`${array.slice(0, 30).join(`\n`)}\`\`\``)

message.channel.send(Embed) // We slice to make sure the message doesn't exceed the 2000 character limit per message.
// The character limit on usernames are 32. We slice to 30 just so it isn't spamming chat. However in theory we can increase this to 62 if we wanted to.

// This is just the basic search and results, we can also add an awaitMessage which we could use to let users select a specific user. I will *not* do that here because I am lazy however if you'd like that,
// feel free to DM me and I'll do it. <3 
// Mio - Out!
};

