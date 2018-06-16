module.exports.run = async (client, message, args) => {


    if (message.author.id !== '295231913612804096') return message.reply(':no_entry_sign: [**Invalid Permissions**]: Only the bot owner can use this command!');
    const restartType = args.join(' ')
    if (restartType === 'this') {
      message.channel.send(`\`\`\`css\nRestarting shard ${client.shard.id + 1}...\`\`\``);
      console.log(`Restarting shard ${client.shard.id + 1}...`);
      setTimeout(() => { console.log(process.exit(0)); }, 400);
    } else
    if (restartType === 'all') {
      message.channel.send('```css\nRestarting all shards...```');
      console.log('Restarting all shards...');
      setTimeout(() => {
        client.shard.broadcastEval('console.log(process.exit(0))').then(x => {
          console.log(x);
        });
      }, 400);
    } else {
      message.channel.send(`\`\`\`css\nRestarting shard ${restartType}...\`\`\``);
      console.log(`Restarting shard ${restartType}...`);
      setTimeout(() => {
        
        
      client.shard.broadcastEval('if (shard.id === %s) return console.log(process.exit(0))', restartType - 1).then(x => {
          console.log(x);
        });
      }, 400);
    }
  }
  exports.conf = {
    aliases: ['example', 'chexample']
    };
   
    exports.help = {
    name: 'example', description: 'hello this is description', usage: 'example'
    };




