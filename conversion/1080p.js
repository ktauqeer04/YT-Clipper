const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const path = require("path");



function worker(pathInput, pathOutput) {

    console.log(pathInput);
    const startTime = Date.now();

    ffmpeg(pathInput)
        .output(pathOutput)
        .videoCodec('libx264')
        .audioCodec('aac')
        .size('1920x1080')        // target 1080p
        .autopad('black')
        .audioBitrate('128k')
        .outputOptions(['-preset', 'fast', '-crf', '23'])
        .on('end', () => {
            console.log('1080p done');
            const endTime = Date.now(); // Capture end time
            const duration = ((endTime - startTime) / 1000).toFixed(2); // seconds
            console.log(`\n1080p done. Time taken: ${duration} seconds`);

        })
        .on('error', err => console.error(err))
        .run();
}

module.exports = worker;