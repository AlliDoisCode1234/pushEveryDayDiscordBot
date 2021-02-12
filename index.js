const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
// const messageReaction = new Discord.MessageReaction(clientdatamessage);


client.on('ready', () => {
    console.log('I am ready!');
  });

const prefix = "!";

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
 

   // All Commands - Long If Conditional
   //


  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }

  else if(command === "push"){
    message.reply("Friendly Reminder to push code to your github today!");
  }

  else if(command === "pushed"){
      // create count but restart count if user misses a day
    message.reply("Hooray!!! I Believe In You!!!");
  }

  else if(command === "streak"){
      // counter variable for streak count
      message.reply("You are currently on a (BLANK - ENTER COUNT Variable) day streak! Keep up the good work!")
  }

  //Logic for Message Reaction Counter
  // if user reacts to the automated message in the morning or the evening
  // take timestamp of when the user reacted and block off from 12:01AM - 11:59PM and store date
  // if user's previous day was also blocked off due to confirmation
  // then add to a count that displays in message for for the user
  // both when pushed confirmation occurs 
  // and when the !streak command is initialized




  //List of Commands to Make:
  //

  // 1.) One morning and one evening Message generated to remind people to push
  // 2.) Pushed command and/or emoji reaction keeps count of consecutive days pushed
  // -> but if you miss a day, count restarts
  // -> or if they choose one confirmation method, the other is not an option
  // 3.) User daily streaks

});

client.login(config.BOT_TOKEN);