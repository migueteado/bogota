import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"

const unban = {
  data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Unban a member")
    .addStringOption((option) =>
      option
        .setName("id")
        .setDescription("The user id to unban")
        .setRequired(true)
    ),
  execute: async (interaction: CommandInteraction) => {
    const id = interaction.options.getString("id")!
    interaction.guild?.members.unban(id)
    return interaction.reply({
      content: `Member unbanned!`,
    })
  },
}

export { unban }
