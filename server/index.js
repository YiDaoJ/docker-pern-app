const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express();
const port = process.env.API_PORT;

app.get("/", (req, res) => {
  res.send("Express server")
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})