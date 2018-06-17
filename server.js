//Sharding
const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./server1.js');
Manager.spawn(2);
