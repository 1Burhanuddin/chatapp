const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));



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
    
    return res.status(e.response.status).json(e.response.data)

  }

 
});

app.get("/", async (req, res) => {
  
  res.redirect("http://localhost:5173/")
 
});



app.listen(3001);