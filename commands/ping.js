const asciiBanner = require("../utils/asciiBanner")
const Command = require("../lib/Command")

module.exports = Command(
  "Play marco polo.",
  function(interaction) {
    interaction.reply({
      embeds: [
        {
          description: asciiBanner("pong")
        }
      ]
    })
  }
)
