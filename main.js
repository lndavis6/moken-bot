const prefix = process.env.DISCORD_TOKEN;
const { Client, Intents } = require('discord.js');
require("dotenv").config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log("MINNET MOKEN IS MOKEN");
})

client.on("messageCreate", message => {

    // Here's I'm using one of An Idiot's Guide's basic command handlers. Using the PREFIX environment variable above, I can do the same as the bot token below
    if (message.author.bot) return;
    if (message.content.indexOf(prefix.length) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.reply("Pong!");
    }
});



client.login();