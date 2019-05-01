const Discord = require('discord.js');
const client = new Discord.Client();

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

client.login(process.env.BOT_TOKEN);
