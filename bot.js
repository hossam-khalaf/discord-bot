console.log('Beep Beep! :1st_place_medal:');

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('heart');
}

const replies = ['Hey there!', 'Huh?', 'Not allowed to chat here'];

client.on('message', gotMsg);

function gotMsg(msg) {
  console.log(msg.content);
  if (msg.content === 'hi') {
    msg.reply('HI TOO!!!!');
  }

  if (msg.channel.id === process.env.CHANNELID && msg.content == 'hi') {
    const i = Math.floor(Math.random() * replies.length);

    msg.channel.send(replies[i]);
  }
}
