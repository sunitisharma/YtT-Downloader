const path = require('path');
const fs = require('fs');

/**
 * 
 * @param {string} fileWithPath file with its path
 * @returns size of a file in MB
 */
const getFileSizeInMB = (fileWithPath) => {
    let fileSizeInMB = (fs.statSync(fileWithPath).size / (1024 * 1024)).toFixed(2);
    return fileSizeInMB;
}

module.exports = {
    getFileSizeInMB,
}
