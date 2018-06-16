// NOTE: This command requires discord version `master/v0.12` which can be installed by doing `npm i hydrabolt/discord.js`
// Require Packages
const Discord = require('discord.js'); // This command requires you to import this package since we are using embeds.
const send = require('quick.hook')
 
exports.run = (client, message, args) => { // We're going to have to require the exports again, just like we did with the ping.
 
  // First, we need to grab the user, if they are doing it for themselves or mentioning someone.
  try {
    let user = message.mentions.users.first() || message.author; // This checks if there is a mention, and takes the first one. Although, if there isn't a mention it uses the message author as a fallback.
 
  // Next, we need to verify that the specified user is listening to spotify.
  if (user.presence.activity !== null && user.presence.activity.type === 'LISTENING' && user.presence.activity.name === 'Spotify' && user.presence.activity.assets !== null) { // This checks all of these if statements, and if they are all true, it runs the following.
   
    // Variables - These are the variables we will be using in the embed
    let trackIMG = `https://i.scdn.co/image/${user.presence.activity.assets.largeImage.slice(8)}`; // This fetches a url image using the largeImage asset after slicing off the first 8 characters.
    let trackURL = `https://open.spotify.com/track/${user.presence.activity.syncID}`; // This grabs the syncID and adds it to the end of a spotify URL.
    let trackName = user.presence.activity.details;
    let trackAuthor = user.presence.activity.state;
    let trackAlbum = user.presence.activity.assets.largeText; // These all hold the info for the song, grabbed from the user's presence.
   
    // Create embed object
    const embed = new Discord.MessageEmbed() // This will create the start of the embed, we will now add to it.
      .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png') // This url will be in the description, it is setting the author & icon field for the embed.
      .setColor(0x1ED760) // This sets the color of the embed
      .setThumbnail(trackIMG) // This sets the thumbnail of the embed, using the variable from before.
      .addField('Song Name', trackName, true) // These are fields, and can be added easily, the true signifies that they can be on the same line.
      .addField('Album', trackAlbum, true)
      .addField('Author', trackAuthor, false) // This signifies only two can be on the line above, the third will be on a new line
      .addField('Listen to Track:', `[\`${trackURL}\`](trackURL)`, false); // This here sets a clickable link, to the trackURL, while still showing the URL in ``.
   
    // Sending Embed
   // message.channel.send(embed); // This sends the formed embed to the channel.
   send(message.channel, embed, {
     name: 'Spotify',
     icon: 'http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/1024/Spotify-icon.png'
   })
   
    // Now, we can test it.
   
  } else { // Although, if one of those conditions is false it will run this.
   
    send(message.channel, '**This user isn\'t listening to Spotify!**', {
      name: 'Spotify Error',
      icon: 'http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/1024/Spotify-icon.png'
    }); // This will notify in chat that the specified user isn't listening to Spotify.
  }
  }   catch (err) {
    send(message.channel, `**${err.name}: ${err.message}**`, {
      name: 'Spotify Error',
      icon: 'http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/1024/Spotify-icon.png'
    })
    
  }
  }
 
 

exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };

