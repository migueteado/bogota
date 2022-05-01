import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"

const ban = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a member")
    .addUserOption((option) =>
      option
        .setName("member")
        .setDescription("The member to ban")
        .setRequired(true)
    ),
  execute: async (interaction: CommandInteraction) => {
    const member = interaction.options.getUser("member")
    interaction.guild?.members.ban(member!)
    return interaction.reply({
      content: `Member banned! ${member!.username}`,
    })
  },
}

export { ban }
