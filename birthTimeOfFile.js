const fs = require('fs');

/**
 *  
 * @param {string} file file address
 * @returns return created date of a file;
 */
const createdDate = (file)=>{
    const birthTime = fs.statSync(file).birthtime;
    return birthTime;
}

module.exports = {
    createdDate,
}