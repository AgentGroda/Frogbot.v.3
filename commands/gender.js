const db = require('quick.db')
module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send('**Please input a gender. `female, male or nonbinary`**')
    //const d = ['male', 'female']
    //if (!args === 'male') return message.channel.send('**You can only use `female or male`**')

    const gender = new db.table('genders')

    if (args[0] === 'female') {
       // let data1 = { gender: 'Female'};
        gender.set(`genders_${message.author.id}`, 1)
        message.channel.send('**Gender set to female!**')
    }
    if (args[0] === 'male') {
       // let data2 = { gender: 'Male'};
        gender.set(`genders_${message.author.id}`, 2)
        message.channel.send('**Gender set to male!**')


    }
    if (args[0] === 'view') {

        let genders = new db.table('genders');
        genders.fetch(`genders_${message.author.id}`).then(obj => {
          if (obj === null) obj = 'Not set.';
          if (obj === 1) obj = 'Female';
          if (obj === 2) obj = 'Male';
          if (obj === 3) obj = 'Nonbinary';
        
        message.channel.send(`**Gender:** \`${obj}\``)
    })
    }
    if (args[0] === 'nonbinary') {
        gender.set(`genders_${message.author.id}`, 3)
        message.channel.send('**Gender set to nonbinary!**')
    }
}