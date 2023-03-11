const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {string} videosArray array of videos
 * @returns shows content of the videos on console in table form
 */
const videoTableCreator = (videosArray)=>(console.table(videosArray))
module.exports = {
    videoTableCreator,
}