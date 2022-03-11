const asciiBanner = require("../utils/asciiBanner")
const Command = require("../lib/Command")

module.exports = Command(
  "Become holier. :pray:",
  function(interaction) {
    interaction.reply({
      embeds: [
        {
          description: `:pray::pray::pray::pray::pray:\n${asciiBanner("DORIME")}\n:pray::pray::pray::pray::pray:`
        }
      ]
    })
  }
)
