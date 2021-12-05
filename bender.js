
const  Discord =  require('discord.js');
// SO , above we set the Discord as the fucking discord api so this fucking thing will work

const bot = new Discord.Client();       //  Sets the constant of Discord Client , basically the app name inside the code , as bot

bot.login('MzcxMTg4ODM4ODc1Mzk4MTQ1.DvT2qw.WM1_7NWAeXHOTzuRMN09ZU09RGE')  //  That's the login token , it basically connects the code to the Discord Servers

const prefix  = ',';                                //  sets the prefix , we need that so the bot knows what to look for in a chat

bot.on('message' , message =>  {

  let msg     =   message.content.toLowerCase(); // this shorts the whole fucking thing from that fuckfest to msg, also sets the whole message to lower case
  let user  =   message.author;   // same with the above but with the fuckos' names on the server
  let cont    =   message.content.slice(prefix.lentgh).lentgh.split("");
  let args    =   cont.slice(1);    // I have no fucking clue , Ill look into that later

      // an 'if' that responds with pong when you ping , I use it to check if the bot works , mainly the prefix constant .
  if ( msg === prefix  + 'ping' ) {                   // Just check if the message is exactly the preset prefix and the word ping
      message.channel.send('Pong')                    //   Responds to the chat with pong
      console.log('\n Just did a PING without an !')  //  also updates the fucking console
    }else if ( msg === prefix  + 'ping' + '!' ){      // Does a check if the ping has an exclametion mark
      message.channel.send('Pong!')                   // responds to the chat with a pong and an excametion mark
      console.log('\n Just did a PING with an !')     // updates the fucking console
    };        //   IS THIS ENOUGH DOCUMENTATION FOR A FUCKING PING RESPONCE PANO ?

  });   // THE FUCKING END OF BOT.ON

bot.on('ready'  , ()=>  {
  console.log('\n I`m online and I want to die ') // A message that prints in the console in order to inform the "admin" that the bot is online and ready
});

 // praktoras texnikis ipostirixis protou epipedou
