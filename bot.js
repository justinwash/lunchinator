const Discord = require('discord.js');
const client = new Discord.Client();

const options = [ 
  'Culinaria :|',
  'Culinaria :|',
  'Culinaria :|',
  'Culinaria :|',
  'Culinaria :|'
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
  if (message.content === '!spin') {
    var pick = Math.floor(Math.random() * (options.length - 1))
    message.reply('options[pick]');
  }
});

client.login(process.env.BOT_TOKEN);
