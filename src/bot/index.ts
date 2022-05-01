import { Client, Intents } from "discord.js"
import * as eventModules from "../events"

export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
})

for (const module of Object.values<any>(eventModules)) {
  if (module.once) {
    client.once(module.name, module.execute)
  } else {
    client.on(module.name, module.execute)
  }
}

export default client
