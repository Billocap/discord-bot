module.exports = function(interaction) {
  interaction.reply({
    embeds: [
      {
        title: "Commands",
        description: "Type `/<command>` to use a command",
        fields: [
          {
            name: "`/help`",
            value: "Prints a help log."
          },
          {
            name: "`/ping`",
            value: "Play ping pong."
          },
          {
            name: "`/marco`",
            value: "Play marco polo."
          }
        ]
      }
    ]
  });
}