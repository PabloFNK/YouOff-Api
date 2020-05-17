const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const { validateYoutubeURL } = require("./utils/validate");

const PORT = process.env.PORT || 3001;

app.use(
  cors({
    exposedHeaders: "Content-Disposition"
  })
);

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});

app.get("/download", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send({ errorMessage: "No URL provided" });
  }

  if (!validateYoutubeURL(url)) {
    return res
      .status(400)
      .send({ errorMessage: "This is not a valid youtube URL" });
  }

  const info = await ytdl.getBasicInfo(url);
  const title = info["player_response"].videoDetails.title;
  const fileName = title.replace(/\s+/g, "_");

  res.header("Content-Disposition", `attachment; filename="${fileName}.mp4"`);

  ytdl(url, {
    format: "mp4"
  }).pipe(res);
});
