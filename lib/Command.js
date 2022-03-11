/**
 * Creates a new command descriptor.
 * @param {string} description Description to be shown on discord.
 * @param {(interaction: Discord.Interaction<Discord.CacheType>) => void} action 
 * Function that handles the command.
 */
module.exports = function(description, action) {
  return {
    description, action
  }
}
