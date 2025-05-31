const ytdl = require("@distube/ytdl-core");
const path = require("path");
const fss = require("fs");
const {convert} = require('./worker');

const pathOutput = path.join(__dirname, '/temp/video.mp4');

function download(inputs) {

    console.log(inputs);

    ytdl(inputs.content).pipe(fss.createWriteStream(pathOutput))
    .on('finish', () => {
        console.log('Download Complete');
        console.log(inputs.state)
        convert(inputs.state);
    })

}

module.exports = {
    download
}