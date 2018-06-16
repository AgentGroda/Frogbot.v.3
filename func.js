module.exports = {


ping: function(channel, title, message, color, avatar) {
    channel.send("Pong!");
},

hook: function(channel, title, message, color, avatar) {
    
},

splitEmbed: function (channel, description, deleteTimer) {

    let fields = Math.floor(description.length / 2048);
    let remaining = fields - (description.length % 2048);

    if (remaining < 0) fields += 1;

    for (var i = 0; i < fields; i++) {



        channel.send({embed:{
            description: description.substring(0,2048),
            color: 0x527f68
        }}).then(msg => {
            msg.delete(deleteTimer)
        })

        description = description.slice(2048)

        }

    },

    embed: function (channel, message, deleteTimer) {

        channel.send({
            embed:{
                description: message,
                color: 0x1D8286
            }
        })//.then(msg => {

           // if (!isNaN(deleteTimer)) {
            //    msg.delete(deleteTimer)
            }

       // })

   /// } 

}