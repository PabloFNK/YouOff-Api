const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(3000, () => {
    console.log('Server Works !!! At port 3000');
});