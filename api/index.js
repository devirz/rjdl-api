import express from "express"
import rjdl from "./rjdl.js"

const app = express();
app.use(express.json())
app.get("/", (req, res) => res.send("Express on Vercel :))))"));
app.post("/api", async (req, res) => {
  const { url } = req.body
  if(url){
    const result = await rjdl(url)
    res.json({ ok: true, result })
  } else {
    res.status(400).json({ ok: false, msg: 'url not found' })
  }
});

app.listen(3333, () => console.log("Server ready on port 3333."));

export default app;