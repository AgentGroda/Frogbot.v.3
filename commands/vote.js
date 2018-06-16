const agree = "✅"
const disagree = "❎"

module.exports.run = async (client, message, args) => {
try {
  let msg = await message.channel.send("Vote!");
  await msg.react(agree);
  await msg .react(disagree);
  
  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 60000});
  message.channel.send(`Voting complete! \n\n${agree}: ${reactions.get(agree).count}\n${disagree}: ${reactions.get(disagree).count}`);
}   catch (err) {
  message.channel.send(`**${message.channel.send}**`)
}


}
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };