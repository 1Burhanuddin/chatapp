const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/A", (req, res) => {
  res.send("Hello World!")
})

app.post("/", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {
            username: username , secret: username, first_name: username
        },
        {
            headers:{"PRIVATE-KEY": "1c9cad88-d5e7-4696-9396-8ea541d364da"}
        }

    )
    return res.status(r.status).json(r.data)

  } catch (e) {
    
    return res.status(e.responce.status).json(e.responce.data)

  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);