const { get } = require('request-promise-native') // You can also use normal request if you want, you would just lose the ability of using .then(). Or you could just use snekfetch

module.exports.run = async (client, message) => {
    if (!message.channel.nsfw) return message.channel.send({embed: {
        title: `Boobs only in NSFW channels pls`
    }})

    const waitMessage = await message.channel.send({ 
        title: `Ya boi ${message.author.username} is looking for some boobies...`,
    })

    const options = { // You dont have to make an object, you could do it directly in the get() method if you want, this just looks cleaner
        url: 'http://api.oboobs.ru/boobs/0/1/random',
        json: true 
    }

    get(options).then(boobs => { // Pass in the boobs objects fetched from the API 
        return waitMessage.edit({embed: {
            title: `:eyes: Boobies`,
            image: {
                url: boobs[0].preview
            },
        }})
    }).catch(error => { // If any error occurs while fetching from the API, edit the message to show the error
        return waitMessage.edit({
            title: `No boobies for ${message.author.username} today :(`,
            description: `\`\`\`js\n${error}\`\`\``,
        })
    })
};
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };