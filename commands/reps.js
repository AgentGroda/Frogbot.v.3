const db = require('quick.db');

module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || message.author;
const rep = new db.table('REPs')
  
  let reps = await rep.fetch(`userRep_${user.id}`);
  
  if (reps === null) reps = 0;
  
  message.channel.send(`${user.username} - Reps: ${reps}`);
}
