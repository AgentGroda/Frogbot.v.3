const Discord = require("discord.js");
const ms = require("ms");
const db = require('quick.db')
const send =  require('quick.hook')

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return send(message.channel, "Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.", {
        name: 'Mute Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return send(message.channel, "Couldn't find user.", {
        name: 'Mute Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    if (tomute.hasPermission("MANAGE_MESSAGES")) return send(message.channel, "The user you are trying to mute is either the same, or higher role than you.", {
        name: 'Mute Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })

    let muterole = message.guild.roles.find(role => role.name === 'Muted');



    const mod = message.author;
    const casenumbers = new db.table('CASENUMBERs')
    const guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    const a = guildcasenumber
    const b = a+1
    casenumbers.set(`case_${message.guild.id}`, b)

const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');

    
  

    if (!muterole) {
        try {
            muterole = await message.guild.roles.create({
  data: {
    name: 'Muted',
    color: 'GREY',
    permission: []
  }
  })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {

                  
                });
              
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return send(message.channel, "You didn't specify a time!", {
        name: 'Mute Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    });
  

      let reason = message.content.split(" ").slice(3).join(" ");
    if (!reason) return send(message.channel, "You didn't specify a reason!", {
        name: 'Mute Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })

    await (tomute.roles.add(muterole.id));




    const embed = new Discord.MessageEmbed()
    .setAuthor('Mute')
    .addField('Moderator', `${mod}`)
    .addField('User', `<@${tomute.id}>`)
    .addField('Time', `${ms(ms(mutetime))}`)
    .addField('Reason', `${reason}`)
    .addField('Case Number', `${guildcasenumber}`)
    .setColor('BLUE')
    .setTimestamp()
    .setThumbnail(tomute.user.avatarURL())
    .setFooter(`ID ${tomute.id}`)
    send(modlog, embed, {
        name: 'Mute',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    send(message.channel, 'I have muted the person and logged it!', {
        name: 'Mute',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })

    const guildcasenumber1 = await casenumbers.fetch(`case_${message.guild.id}`)
    const c = guildcasenumber1
    const d = c+1
    casenumbers.set(`case_${message.guild.id}`, d)
    
    

    setTimeout(function() {

        tomute.roles.remove(muterole.id);


      const embed1 = new Discord.MessageEmbed()
      .setAuthor('Unmute')
      .addField('Moderator', `<@364071140034871296>`)
      .addField('User', `<@${tomute.id}>`)
      .addField('Reason', `Auto`)
      .addField('Case Number', `${guildcasenumber1}`)
      embed1.setColor('BLUE')
      embed1.setTimestamp()
      embed1.setFooter(`ID ${tomute.id}`)
      send(modlog, embed1, {
          name: 'Mute',
          icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
      })
    }, ms(mutetime));

}

    let mutetime = args[1];
    if (!mutetime) return send(message.channel, "You didn't specify a time!", {
        name: 'Mute Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    });
  

      let reason = message.content.split(" ").slice(3).join(" ");
    if (!reason) return send(message.channel, "You didn't specify a reason!", {
        name: 'Mute Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })

    await (tomute.roles.add(muterole.id));



    const embed = new Discord.MessageEmbed()
    .setAuthor('Mute')
    .addField('Moderator', `${mod}`)
    .addField('User', `<@${tomute.id}>`)
    .addField('Time', `${ms(ms(mutetime))}`)
    .addField('Reason', `${reason}`)
    .addField('Case Number', `${guildcasenumber}`)
    .setColor('BLUE')
    .setTimestamp()
    .setThumbnail(tomute.user.avatarURL())
    .setFooter(`ID ${tomute.id}`)
    send(modlog, embed, {
        name: 'Mute',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    send(message.channel, 'I have muted the person and logged it!', {
        name: 'Mute',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })

    const guildcasenumber1 = await casenumbers.fetch(`case_${message.guild.id}`)
    const c = guildcasenumber1
    const d = c+1
    casenumbers.set(`case_${message.guild.id}`, d)
    
    

    setTimeout(function() {

        tomute.roles.remove(muterole.id);


      const embed1 = new Discord.MessageEmbed()
      .setAuthor('Unmute')
      .addField('Moderator', `<@364071140034871296>`)
      .addField('User', `<@${tomute.id}>`)
      .addField('Reason', `Auto`)
      .addField('Case Number', `${guildcasenumber1}`)
      embed1.setColor('BLUE')
      embed1.setTimestamp()
      embed1.setFooter(`ID ${tomute.id}`)
      send(modlog, embed1, {
          name: 'Mute',
          icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
      })
    }, ms(mutetime));

}
