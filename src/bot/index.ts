import { Client, Intents } from "discord.js"
import * as commandModules from "../commands"

const commands = Object(commandModules)
export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
})

console.log(commands)

client.once("ready", () => {
  console.log("🤖 MoaitoBot is ready!")
})

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName } = interaction
  commands[commandName]?.execute(interaction, client)
})

export default client
