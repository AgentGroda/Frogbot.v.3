/*
    The following code goes into it's own file, and you run this file
    instead of your main bot file.
*/
const http  = require('http')

const express = require('express')
const app = express()

const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./server1.js');
Manager.spawn(2);

  


//app.get('/test', './views/index.html')