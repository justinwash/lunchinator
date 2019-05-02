const Discord = require('discord.js');
const client = new Discord.Client();
const timeStuff = require('./helpers.js')

const options = [
  ['Culinaria :|', 8],
  ['Food Court :)', 3],
  ['Food Trucks :?', 2],
  ['Sushi :D', 1],
  ['Sad Sandwiches :purplebeard:', 1],
  ['High Pointe :P', 1]
];

// Build 0-1 ranges depending on weighting
var weightSum = 0;
var ranges = [];

// Get sum of weightings
for (var i = 0; i < options.length; i++) {
  weightSum += options[i][1];
}

// Build array of odds - could probably just replace the options[0][1]
// weighting int, or pop in if we want to keep it a const
for (var i = 0; i < options.length; i++) {
  ranges.push(options[i][1] / weightSum);
}

function getOption(pick) {
  var rangesAdd = 0;
  for (var i = 0; i < ranges.length; i++) {
    rangesAdd += ranges[i];
    if (pick < rangesAdd) {
      return options[i][0];
    }
  }
}


// Bot Start
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!lunch') {
    // Pick random lunch choice from options
    // TODO: seeded random on first pick of day, based on date
    var pick = Math.random();
    message.reply('Lunch today is at ' + getOption(pick));
  }
});

client.on('message', message => {
  if (message.content === '!lunchtime') {
    // var remaining = showTime(new Date().setHours(11, 30));
    var remaining = timeStuff.getTimeUntil(11, 30) //doesn't work with negatives. just looks weird. fux with it.
    message.reply(remaining != null ? remaining + ' until lunchtime :D' : 'The time for lunch has passed :(');
  }
});

client.login(process.env.BOT_TOKEN);



