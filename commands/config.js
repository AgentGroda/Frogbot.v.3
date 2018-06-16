// This command will be where we view the message log channel, join message text, DM text, and leavemessage text

// Require Packages
const db = require('quick.db')
const Discord = require('discord.js')

exports.run = (client, message, args, func) => {

    // Variables - These are all the variables that we will be using.
    let channel
    let dmText
    let joinText
    let leaveText
    let modlog

    // First, we need to fetch the message channel
    db.fetch(`messageChannel_${message.guild.id}`).then(channelIDFetched => {

        // Verify Arguments - If the text is blank, that means it hasn't been defined yet.
        if (!message.guild.channels.get(channelIDFetched)) channel = '*none*'
        else channel = message.guild.channels.get(channelIDFetched)
        // What is happening here is that it is trying to see if the CHANNEL ID stored in channelIDFetched.text is a valid channel in the guild, if not it sets channel to none, if it is it sets channel to the channel


        db.fetch(`modlog__${message.guild.id}`).then(modlog => {
            if (!message.guild.channels.get(modlog)) modlog = '*none*'
        else modlog = message.guild.channels.get(modlog)
        // Next, we can fetch the Join DM Text
        db.fetch(`joinMessageDM_${message.guild.id}`).then(joinDMFetched => {

            // Verify Arguments - The same thing is happening here as the last verification. This time it's just checking it joinedDMFetched.text is empty
            if (!joinDMFetched) dmText = '*none*'
            else dmText = joinDMFetched

            // Now, we want to fetch the join text for the server - accidently put a comma instead of a period there, make sure you don't do that.
            db.fetch(`joinMessage_${message.guild.id}`).then(joinTextFetched => {

                // Verify Arguments - Same thing as the last one.
                if (!joinTextFetched) joinText = '*none*'
                else joinText = joinTextFetched

                // Finally, we can fetch the message thats sent when someone leaves
                db.fetch(`leaveMessage_${message.guild.id}`).then(leaveTextFetched => {

                    // Verify Arguments - Same thing as the last one.
                    if (!leaveTextFetched) leaveText = '*none*'
                    else leaveText = leaveTextFetched


                    const embed = new Discord.MessageEmbed()
                    .setAuthor(`${message.guild.name}'s Config`)
                    .setDescription(`**Logging Channel:** ${channel}\n **Welcome Channel Text:** ${joinText}\n **Leave Channel Text:** ${leaveText}\n **Mod-Log:** ${modlog}`)
                    .setColor(0x1D8286)
                    .setFooter('Command made by AgentGroda#6857')
                    message.channel.send(embed)

                })


            })

        })

    })
})

}
exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };