
const  Commando =  require('discord.js-commando');
// SO , above we set the Discord as the fucking discord api so this fucking thing will work
const bot = new Commando .Client();       //  Sets the constant of Discord Client , basically the app name inside the code , as bot
bot.login('MzcxMTg4ODM4ODc1Mzk4MTQ1.DvT2qw.WM1_7NWAeXHOTzuRMN09ZU09RGE')  //  That's the login token , it basically connects the code to the Discord Servers


bot.registry.registerDefaults();
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerCommandsIn(__dirname  + '/commands');



bot.on('message' , function(message) {    //  AM ACTUALL FUCKING FUNCTION . it also responds to messages and shit .BUT A FUCKING FUNCTION!

  let msg     =   message.content.toLowerCase(); // this shorts the whole fucking thing from that fuckfest to message.content.toLowerCase, also sets the whole message to lower case
  let sender  =   message.author;   // same with the above but with the fuckos' names on the server
  //let cont    =   message.content.slice(prefix.lentgh).lentgh.split("");
 // let args    =   cont.slice(1);    // I have no fucking clue , Ill look into that later

  });   // THE FUCKING END OF BOT.ON

bot.on('ready'  , function()  {

  console.log('\n I`m online and I want to die ') // A message that prints in the console in order to inform the "admin" that the bot is online and ready

});



 // praktoras texnikis ipostirixis protou epipedou
