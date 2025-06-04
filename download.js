const ytdl = require("@distube/ytdl-core");
const path = require("path");
const fss = require("fs");
const {convert} = require('./worker');

const pathOutput = path.join(__dirname, '/temp/video.mp4');

function download(inputs) {

    ytdl.getInfo(inputs).then((info) => {
        const format = ytdl.chooseFormat(info.formats, {quality: "247"});
        const outputFilePath = `${info.videoDetails.title}.mp4`;
        const outputstream = fss.createWriteStream(outputFilePath);

        ytdl.downloadFromInfo(info, {format: format}).pipe(outputstream);

        outputstream.on('finish', () => {
            console.log("finished downloading....");
        });
    }).catch((error) => {
        console.error(error);
    })

}


module.exports = {
    download
}