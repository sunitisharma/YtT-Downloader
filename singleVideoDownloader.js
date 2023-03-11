const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');
const { checkAndCreatePath } = require('./checkAndCreatePath');



/**
 * 
 * @param {string} url url of the video
 * @param {string} videoName name of the video
 * @param {string} download_path download path
 * @returns 
 */
const singleVideoDownloader = (url, videoName ,download_path = path.join(__dirname, "assets/videos")) => {
    let videoNameWithPath = path.join(download_path, `video ${videoName}.mp4`);
    checkAndCreatePath(download_path);

    const writeStream = fs.createWriteStream(videoNameWithPath);
    return new Promise((resolve, reject) => {
        const ytStream = ytdl(url).pipe(writeStream);
        ytStream.on("close", () => {
            resolve(true);
            console.log(`video ${videoName}.mp4 downloaded successfully`);
        });
    });
}

module.exports = {
    singleVideoDownloader,
}