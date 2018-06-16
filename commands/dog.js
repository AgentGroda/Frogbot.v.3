module.exports.run = async (client, message, args) => {
    var request = require('request');
  try {
      request.get('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var dog = JSON.parse(body);
        message.channel.send({embed: {
                  title: 'Here is a dog!',
                  "image": {
                  "url": dog.message,
                },
                footer: {
                  icon_url: client.user.avatarURL
                },
                color: 654456
              }
          });
      }
    })
  }  catch (error) {
  message.channel.send(`**ERROR:** ${error}`)
  }
 //  .catch( error => message.channel.send(`**ERROR:** ${error.message}`))
  }
  exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };