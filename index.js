require("dotenv").config();

const Discord = require("discord.js");
const process = require("process");
const express = require("express");

const logger = require("./lib/logger");
const help = require("./commands/help");
const ping = require("./commands/ping");
const marco = require("./commands/marco");

const Client = new Discord.Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGE_REACTIONS',
    'GUILD_MESSAGES',
    'GUILD_INVITES',
    'GUILD_VOICE_STATES',
    'GUILD_MEMBERS',
    'GUILD_PRESENCES'
  ]
});

Client.login(process.env.BOT_TOKEN);

/**
 * @type {Discord.ApplicationCommandDataResolvable[]}
 */
const commands = [
  {
    name: "help",
    description: "Prints a help log."
  },
  {
    name: "ping",
    description: "Play ping pong."
  },
  {
    name: "marco",
    description: "Play marco polo."
  }
];

Client.on("ready", () => {
  logger.info("Bot online.");

  Client.application.commands.set(commands).then(_ => {
    logger.info("Slash commands configured.");
  });
});

Client.on("interactionCreate", (interaction) => {
  if (interaction.isCommand()) {
    const command = require(`./commands/${interaction.commandName}`)

    if (command) {
      command(interaction)
    } else {
      interaction.reply("Command not implemented.");
    }
  }
});

const app = express();

app.get("/", (_, res) => {
  res.send("Bot Reloaded.");
});

app.listen(process.env.PORT || 3000, () => {
  logger.info(`Server online on port ${process.env.PORT || 3000}`);
});