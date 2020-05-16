const ytdl = require("ytdl-core");

const validateYoutubeURL = url => {
  return ytdl.validateURL(url);
};

module.exports = {
  validateYoutubeURL
};
