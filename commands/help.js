module.exports = function(interaction) {
  interaction.reply({
    embeds: [
      {
        title: "Commands",
        description: "`/help` Prints a help log.\n`/ping` Play ping pong.\n`/marco` Play marco polo.",
      }
    ]
  });
}