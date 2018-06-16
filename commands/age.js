const db = require('quick.db')
module.exports.run = async (client, message, args) => {
    if(args[0] === 'set') {
        if(!args[1]) return message.channel.send('**Please enter your age!**')
        const age = new db.table('age')
        if(isNaN(args[1])) return message.channel.send('**Please enter a number!**')
        age.set(`age_${message.author.id}`, args[1])
        const ages = await age.fetch(`age_${message.author.id}`)
        message.channel.send(`**Your age is set to ${ages}!**`)
    }
    if (args[0] === 'view') {
        const age = new db.table('age')
        const ages = await age.fetch(`age_${message.author.id}`)
       // if (ages === null) ages = 'Not set.';
        //if (ages === 1) ages = '1';
        //if (ages === 2) ages = '2';
        //if (ages === 3) ages = '3';
        message.channel.send(`**Your age is ${ages}!**`)
    }
}