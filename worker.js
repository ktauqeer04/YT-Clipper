const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const path = require("path");
const { worker360, worker480, worker720, worker1080, worker1440 } = require('./conversion/index');

ffmpeg.setFfmpegPath(ffmpegStatic);
const pathInput = path.join(__dirname, "temp", "video.mp4");
const pathOutput = path.join(__dirname, "videoOutput", "output.mp4");

function convert(state){
    

    switch(state) {
        case "360p":
            console.log('downloading from 360p');
            worker360(pathInput, pathOutput)
            break;

        case "480p": 
            worker480(pathInput, pathOutput)
            break;

        case "720p":
            worker720(pathInput, pathOutput)
            break;

        case "1080p":
            worker1080(pathInput, pathOutput)
            break;

        case "1440p":
            worker1440(pathInput, pathOutput)
            break;

        default: 
            console.log('not gonna work');
            break;

    }

}

module.exports = {
    convert
}