import express from "express"
import client from "./bot"
import config from "./config"

const app = express()
app.use(express.json())

client.login(config.DISCORD_TOKEN)

// Start server
const server = app.listen(config.PORT || 3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
)
