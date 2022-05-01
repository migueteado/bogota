import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v10"
import config from "./config"
import * as commandModules from "./commands"

type Command = {
  data: unknown
}

const commands = []

for (const module of Object.values<Command>(commandModules)) {
  commands.push(module.data)
}

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN)

rest
  .put(Routes.applicationCommands(config.CLIENT_ID), {
    body: commands,
  })
  .then(() => {
    console.log("Successfully registered application commands.")
  })
  .catch(console.error)
