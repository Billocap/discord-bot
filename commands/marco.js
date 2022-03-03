const figlet = require("figlet");

module.exports = function(interaction) {
    interaction.reply({
      embeds: [
        {
          description: `\`\`\`diff\n${figlet.textSync("pong", {
            font: "Poison"
          }).split("\n").map(line => `- ${line}`).join("\n")}\`\`\``
        }
      ]
    });
  }