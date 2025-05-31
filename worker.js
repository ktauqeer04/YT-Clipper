const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const fs = require("fs");
const path = require("path");

ffmpeg.setFfmpegPath(ffmpegStatic);
const pathInput = path.join(__dirname, "temp", "video.mp4");
const pathOutput = path.join(__dirname, "audio", "sound.mp3");

function convert(){

    ffmpeg()
        .input(pathInput)
        .outputOptions('-ab', '192k')
        .saveToFile(pathOutput)
        .on('progress', (progress) => {
            if(progress.percent){
                console.log(`Processing: ${Math.floor(progress.percent)}% done`)
            }
        })
        .on('end', () => {
            console.log('FFmpeg has finished.');
        })
        .on('error', (error) => {
            console.error(error);
        });
}

module.exports = {
    convert
}