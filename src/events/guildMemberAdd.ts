import { GuildMember } from "discord.js"

const guildMemberAdd = {
  name: "guildMemberAdd",
  execute: (member: GuildMember) => {
    member.send({
      content: "Welcome to the server!",
    })
  },
}

export { guildMemberAdd }
