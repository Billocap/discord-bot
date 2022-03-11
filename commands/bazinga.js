const Command = require("../lib/Command")

const jokes = [
  `**Você conhece a piada do pônei?** - *Pô nei eu*`,
  `**O que o pagodeiro foi fazer na igreja?** - *Cantar pá God*`,
  `**O que o pato falou para a pata?** - *Vem quá*`,
  `**Você sabe qual é o rei dos queijos?** - *O reiqueijão*`,
  `**O que acontece quando chove na Inglaterra?** - *Vira Inglalama*`,
  `**O que o tomate foi fazer no banco?** - *Tirar extrato*`,
  `**Mas é pavê ou pacumê?**`,
  `**Como se chama a pessoa que viu o Thor de perto?** - *Vi-Thor.*`,
  `**Por que a velhinha não usa relógio?** - *Porque ela é sem hora (senhora)*`,
  `**Por que há uma cama elástica no polo Norte?** - *Para o urso polar*`,
  `**Na vida tudo passa, até mesmo a uva.**`,
  `**O que a vaca disse para o boi?** - *Te amuuuuuuuuuuuu*`
]

module.exports = Command(
  "Ruin everyone's day with a bad joke.",
  function(interaction) {
    interaction.reply({
      embeds: [
        {
          description: jokes[Math.ceil((jokes.length - 1) * Math.random())],
        }
      ]
    })
  }
)
