const Discord = require('discord.js');
const client = new Discord.Client();
require('./helpers.js');

const options = [
  'Culinaria :|',
  'Culinaria :|',
  'Food Court :)',
  'Sushi :D',
  'Sad Sandwiches :(',
  'Food Trucks :?',
  'High Pointe :P'
]

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!lunch') {
    var pick = Math.floor(Math.random() * (options.length - 1))
    message.reply('Lunch today is at ' + options[pick]);
  }
});

client.on('message', message => {
  if (message.content === '!lunchtime') {
    var remaining = (new Date().setHours(11, 30) - new Date()).toHHMMSS();

    message.reply(remaining + ' until lunchtime :(');
  }
});

client.login(process.env.BOT_TOKEN);
