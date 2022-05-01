import { Client, Interaction } from "discord.js"
import * as commandModules from "../commands"

const commands = Object(commandModules)

const interactionCreate = {
  name: "interactionCreate",
  execute: (interaction: Interaction, client: Client) => {
    if (!interaction.isCommand()) {
      return
    }

    const { commandName } = interaction
    commands[commandName]?.execute(interaction, client)
  },
}

export { interactionCreate }
