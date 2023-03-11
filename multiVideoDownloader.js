const path = require('path');
const { singleVideoDownloader } = require("./singleVideoDownloader");
const { videoInfoObjCreator } = require('./videoInfoObjCreator');

/**
 * downloads youtube videos at given path
 * @param {string} urls  array of youtube videos's urls
 * @param {string} download_path download path where we will download the files
 */
const multiVideoDownloader = async (urls, download_path = path.join(__dirname, "assets/videos")) => {
    await Promise.all(urls.map((url, index) => singleVideoDownloader(url, index, download_path)));
    videoInfoObjCreator(download_path);
}

module.exports = {
    multiVideoDownloader,
}