const Discord = require('discord.js');
const client = new Discord.Client();
const timeStuff = require('./helpers.js')
var seedrandom = require('seedrandom');

var timeForLunch = '11:30'

const options = [
  // Food choice followed by weighting
  // higher weighting = higher chance to be picked
  ['Culinaria :|', 9],
  ['Food Court :)', 3],
  ['Food Trucks :?', 1],
  ['Sushi :D', 1],
  ['Sad Sandwiches :purplebeard:', 1],
  ['High Pointe :P', 1],
  ['ChiliMacs', 1]
];

var weightSum = 0;
var ranges = [];
var today = new Date();
var rightNow = new Date();
var lunchPick = 0;
var rerolls = 3;
var seededRandom;

// Get sum of weightings
for (var i = 0; i < options.length; i++) {
  weightSum += options[i][1];
}

// Build array of odds - could probably just replace the options[0][1]
// weighting int if we don't need options to be a const
for (var i = 0; i < options.length; i++) {
  ranges.push(options[i][1] / weightSum);
}

function getOption(pick) {
  var rangesAdd = 0;
  for (var i = 0; i < ranges.length; i++) {
    rangesAdd += ranges[i];
    if (pick < rangesAdd) {
      return i;
    }
  }
}

function getToday() {
  rightNow = new Date();
  return "" + rightNow.getFullYear() + (rightNow.getMonth() + 1) + rightNow.getDate();
}

function lunchReply(message) {
  if (rerolls) {
    message.reply('Lunch today is at ' + options[lunchPick][0] + " " + (ranges[lunchPick] * 100).toFixed(2) + "% chance\n" +
    "You can reroll the choice with !lunchroll. " + rerolls + " remaining.");
  } else {
    message.reply('Hope you like ' + options[lunchPick][0] + " because that was your last reroll! " + (ranges[lunchPick] * 100).toFixed(2) + "% chance");
  }
}

// Bot Start
client.on('ready', () => {
  console.log('I am ready!');
});

// Display current lunch pick
client.on('message', message => {
  if (message.content === '!lunch') {
    // Check if this is the first time calling this of the day
    if (today != getToday()) {
      // Make new function for initDay
      rerolls = 3;
      today = getToday();
      seededRandom = seedrandom(today);
      lunchPick = getOption(seededRandom());
      lunchReply(message);
    } else {
      lunchReply(message);
    }
  }
});

// Roll for new lunch pick
client.on('message', message => {
  if (message.content === '!lunchroll') {
    // Check if this is the first time calling this of the day
    if (today != getToday()) {
      // Make new function for initDay
      rerolls = 3;
      today = getToday();
      seededRandom = seedrandom(today);
      lunchPick = getOption(seededRandom());
      lunchReply(message);
    } else {
      if (rerolls) {
        rerolls -= 1;
        lunchPick = getOption(Math.random());
        lunchReply(message);
      } else {
        message.reply('You have no more rerolls! You are stuck with ' + options[lunchPick][0]);
      }
    }
  }
});

client.on('message', message => {
  if (message.content.substr(0, 13) === '!setlunchtime') {
    console.log(message.content.substr(14, 18))
    if (/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(message.content.substr(14, 18))) {
      timeForLunch = message.content.substr(14, 18);
      message.reply('Lunchtime set to ' + timeForLunch);
    }
  }
})

client.on('message', message => {
  if (message.content === '!lunchtime') {
    // var remaining = showTime(new Date().setHours(11, 30));
    var remaining = timeStuff.getTimeUntil(timeForLunch) //doesn't work with negatives. just looks weird. fux with it.
    message.reply(remaining != null ? remaining + ' until lunchtime :D' : 'The time for lunch has passed :(');
  }
});

client.on('message', message => {
  if (message.content === '!dinner' || message.content === '!breakfast') {
    rerolls -= 1;
    message.reply('LUNCHinator... LUNCH. lunch only. not not lunch. lunchn\'tn\'t.\n' + 
    "You just lost a reroll for that.");
  }
});

client.on('message', message => {
  function recurse(index) {
    var response = message.content.substr(11,message.length)
    if (index > 0) {
      message.reply(response.substr(0, index));
      recurse(index - 1)
    }
  }
  
  if (message.content.substr(0,10) === '!recursion') {
    var index = message.content.substr(11,message.content.length).length
    if (index <= 30) recurse(index)
    else message.reply('recursion limited to 20 characters') return
  }
});

console.log(process.env);
client.login(process.env.BOT_TOKEN);



