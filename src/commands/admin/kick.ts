import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"

const kick = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a member")
    .addUserOption((option) =>
      option
        .setName("member")
        .setDescription("The member to kick")
        .setRequired(true)
    ),
  execute: async (interaction: CommandInteraction) => {
    const member = interaction.options.getUser("member")
    interaction.guild?.members.kick(member!)
    return interaction.reply({
      content: `Member kicked! ${member!.username}`,
    })
  },
}

export { kick }
