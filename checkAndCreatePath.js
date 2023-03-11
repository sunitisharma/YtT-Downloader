const fs = require('fs')

/**
 * 
 * @param {string} directory_path - checks if a directory  exists or not, if not then creates that directory
 */
const checkAndCreatePath = (directory_path) => {
    if (!fs.existsSync(directory_path)) {
        fs.mkdirSync(directory_path, { recursive: true });
    }
};

module.exports = {
    checkAndCreatePath,
}