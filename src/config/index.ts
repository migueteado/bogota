import dotenv from "dotenv"

dotenv.config()

const { CLIENT_ID, DISCORD_TOKEN, GUILD_ID, PORT } = process.env

if (!DISCORD_TOKEN || !GUILD_ID || !CLIENT_ID || !PORT) {
  throw new Error("Missing environment variables")
}

const config: Record<string, string> = {
  CLIENT_ID,
  DISCORD_TOKEN,
  GUILD_ID,
  PORT,
}

export default config
