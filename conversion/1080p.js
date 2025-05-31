const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const path = require("path");

ffmpeg.setFfmpegPath(ffmpegStatic);
const pathInput = path.join(__dirname, "temp", "video.mp4");
const pathOutput = path.join(__dirname, "videoOutput", "output.mp4");


function worker(pathInput, pathOutput) {

    console.log(pathInput);

    ffmpeg(pathInput)
        .output(pathOutput)
        .videoCodec('libx264')
        .audioCodec('aac')
        .size('1920x1080')        // target 1080p
        .autopad('black')
        .audioBitrate('128k')
        .outputOptions('-preset fast', '-crf 23')
        .on('end', () => console.log('1080p done'))
        .on('error', err => console.error(err))

}

module.exports = worker;