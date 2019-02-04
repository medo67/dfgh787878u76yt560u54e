const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "o";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Tiger Gamer `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Jack ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Tiger Gamer `)//حقوق دايموند كودز
client.user.setStatus("online")
});

client.login(process.env.BOT_TOKEN);
