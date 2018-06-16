const snekfetch = require("snekfetch");
const humanizeduration = require("humanize-duration");

exports.run = async (client, message, args) => {
    if (args.length > 0) {
        snekfetch.get("https://skimdb.npmjs.com/registry/" + args[0].toLowerCase()).then((body) => {
            message.channel.send({
                embed: {
						title: "npm package",
						color: 3066993,
						fields: [
							{
								name: "Name",
								value: body.body.name,
								inline: true
                            },
                            {
								name: "Description",
								value: body.body.description,
								inline: true
                            },
							{
								name: "Author",
								value: body.body.author.name,
								inline: true
							},
							{
								name: "Latest",
								value: body.body["dist-tags"].latest,
								inline: true
							},
							{
								name: "GitHub",
								value: ((body.body.repository) ? body.body.repository.url.replace("git+", "").replace(".git", "").replace("git://", "https://").replace("git@github.com:", "https://github.com/") : "No Repository"),
								inline: true
							},
							{
								name: "Maintainers",
								value: body.body.maintainers.map((m) => m.name).join(", "),
								inline: true
							},
							{
								name: "Last Updated",
								value: humanizeduration(Date.now() - new Date(body.body.time[body.body["dist-tags"].latest]).getTime(), {
									round: true,
									largest: 2
								}),
								inline: true
                            }
						]
					}
            })
        }).catch((error) => {
            if (error.status === 404) return message.channel.send({
                embed: {
                    title: "ERROR!",
                    color: 0xE50000,
                    description: "An error occured while fetching that npm package"
                }
            })
            console.error("Failed to grab NPM Package.", error.message);
            message.reply("NPM Package **" + args[0] + "** was not found") 
        })
    } else {
        message.channel.send({
				embed: {
					title: "Error!",
					color: 0xE50000,
					description: "Missing `<name>` argument."
				}
			});
    }
}
exports.conf = {
	aliases: ['example', 'chexample']
	};
   
	exports.help = {
	name: 'example', description: 'hello this is description', usage: 'example'
	};