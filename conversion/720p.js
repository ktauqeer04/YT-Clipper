const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const path = require("path");

ffmpeg.setFfmpegPath(ffmpegStatic);


function worker(pathInput, pathOutput) {

    ffmpeg(pathInput)
    .output(pathOutput)
    .videoCodec('libx264')
    .audioCodec('aac')
    .size('1280x720')         // target 720p
    .autopad('black')
    .audioBitrate('128k')
    .outputOptions(['-preset', 'fast', '-crf', '23'])
    .on('end', () => console.log('720p done'))
    .on('error', err => console.error(err))
    .run()
}

module.exports = worker;