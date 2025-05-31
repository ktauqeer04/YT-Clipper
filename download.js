const ytdl = require("@distube/ytdl-core");
const path = require("path");
const fss = require("fs");
const {convert} = require('./worker');

const pathOutput = path.join(__dirname, '/temp/video.mp4');

function download(inputs) {

    ytdl(inputs).pipe(fss.createWriteStream(pathOutput))
    .on('finish', () => {
        console.log('Download Complete');
        convert();
    })

}

module.exports = {
    download
}