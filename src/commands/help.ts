import { SlashCommandBuilder } from "@discordjs/builders"
import { Client, CommandInteraction, TextChannel } from "discord.js"

const help = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Display the list of commands"),
  execute: async (
    interaction: CommandInteraction,
    client: Client
  ): Promise<void> => {
    return interaction.reply({
      content: "Help is on the way!",
      ephemeral: true,
    })
  },
}

export { help }
