const db = require('quick.db');

module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || message.author;
const money = new db.table('money')
  
  let balance = await money.fetch(`userBalance_${user.id}`);
  
  if (balance === null) balance = 0;
  
  message.channel.send(`${user.username} - Balance: $${balance}`);
}
