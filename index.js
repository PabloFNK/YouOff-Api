const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const { validateYoutubeURL } = require("./utils/validate");

app.use(
  cors({
    credentials: true,
    origin: true
  })
);

app.options("*", cors());

app.get("/", (req, res) => res.send("Working!!!"));

app.listen(process.env.PORT || 3000, function() {
  console.log("server running on port 3000", "");
});

// const PORT = process.env.PORT || 3000;

// app.use(cors());

// app.listen(PORT, () => {
//   console.log(`Server listening at port: ${PORT}`);
// });

// app.get("/download", async (req, res) => {
//   const { url } = req.query;

//   if (!url) {
//     return res.status(500).send("No URL provided");
//   }

//   if (!validateYoutubeURL(url)) {
//     return res.status(500).send("This is not a valid youtube URL");
//   }

//   const info = await ytdl.getBasicInfo(url);
//   const title = info["player_response"].videoDetails.title;
//   const fileName = title.replace(/\s+/g, "_");

//   res.header("Content-Disposition", `attachment; filename="${fileName}.mp4"`);

//   ytdl(url, {
//     format: "mp4"
//   }).pipe(res);
// });
