const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const path = require("path");

ffmpeg.setFfmpegPath(ffmpegStatic);


function worker(pathInput, pathOutput){

    console.log(pathInput);
    console.log(pathOutput);
    ffmpeg(pathInput)
        .output(pathOutput)
        .videoCodec('libx264')
        .audioCodec('aac')
        .size('640x360')          // target resolution
        .autopad('black')         // pad to maintain aspect ratio:contentReference[oaicite:0]{index=0}
        .audioBitrate('128k')
        .outputOptions(['-preset', 'fast', '-crf', '23'])
        .on('end', () => console.log('360p done'))
        .on('error', err => console.error(err))
        .run();
}

module.exports = worker;
