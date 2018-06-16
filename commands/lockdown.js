const ms = require("ms");
//const config = require ("../config.json");
exports.run = (client, message, args) => {
try {
if (!message.guild.member(message.author).hasPermission("MANAGE_SERVER")) return message.channel.send("Sorry sir you are not an Administrator so you can't use this command. Administrators are the people who possess the `Manage_Server` permission.")
  if (!client.lockit) client.lockit = [];
  let time  = args.join(" ");
  let validUnlocks = ["release", "unlock" , "rel" , "ul"];
  const perms = message.member.hasPermission("MANAGE_MESSAGES");
 if (!perms) return message.channel.send("Sorry sir, you must have **Manage_Messages** permission.")
  if (!time) return message.channel.send("You must set a duration for the lockdown in either hours, minutes or seconds.");

    if (message.author.id === "295231913612804096") {
message.channel.overwritePermissions(message.author, {
  SEND_MESSAGES: true
})}
  
  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions({
overwrites: [
  {
     id: message.guild.id,
     null: ['SEND_MESSAGES'],
  },
],
  reason: 'Needed to change permissions'

    }).then(() => {
      message.channel.send("Lockdown lifted.");
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions({
overwrites: [
  {
     id: message.guild.id,
     denied: ['SEND_MESSAGES'],
  },
],
  reason: 'Needed to change permissions'

    }).then(() => {
      message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions({
overwrites: [
  {
     id: message.guild.id,
     null: ['SEND_MESSAGES'],
  },
],
  reason: 'Needed to change permissions'
          }).then(message.channel.send("Lockdown lifted.")).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
} catch (error) {
console.log(error)
}
};
exports.conf = {
  aliases: ['example', 'chexample']
  };
 
  exports.help = {
  name: 'example', description: 'hello this is description', usage: 'example'
  };