const Discord = require('discord.js')
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
      let subreddit = message.content.split(" ").slice(1).join(" ");
		const { body } = await snekfetch.get(`https://www.reddit.com/r/${subreddit}.json`)
			.query({ limit: 1000 })
      .catch(err => {
				message.channel.send(`:no_entry_sign: Something went wrong while trying to search that subreddit.\n${err.message}`);
			});
		const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		if (!allowed.length) return message.channel.send(':no_entry_sign: This post contains NSFW content! If you would like to view it, you can run this command in a NSFW channel.');
		const embed = new Discord.MessageEmbed()
		let data = allowed[Math.floor(Math.random() * allowed.length)].data;
		embed.setColor('RANDOM')
			.setAuthor(`Requested by ${message.author.username}`, message.author.avatarURL())
			.setTitle(data.title)
			.setURL(`https://reddit.com${data.permalink}`)
			.setImage(data.url)
			.setFooter(`${data.subreddit_name_prefixed} | 👍 ${data.ups}`)
		message.channel.send(embed);
	}
	exports.conf = {
		aliases: ['example', 'chexample']
		};
	   
		exports.help = {
		name: 'example', description: 'hello this is description', usage: 'example'
		};

