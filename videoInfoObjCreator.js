const fs = require('fs');
const mime = require('mime-types');
const path = require('path');
const { createdDate } = require('./birthTimeOfFile');
const { getFileSizeInMB } = require('./fileSizeInMB');
const { videoTableCreator } = require('./videoTableCreator');


/**
 * creats array of objects of videos with some information in a directory
 * @param {string} downloaad_path 
 */
const videoInfoObjCreator = (downloaad_path) => {
    const videos = [];
    const data = fs.readdirSync(downloaad_path);
    data.map((fileName)=>{
        const video = {
            fileName :fileName,
            file_extension : path.extname(fileName),
            file_path : `assets/videos/${fileName}`,
            file_created_date : createdDate(path.join(downloaad_path,fileName)),
            file_size : getFileSizeInMB(path.join(downloaad_path,fileName)) + ' MB',
            file_mime_type : mime.lookup(`${downloaad_path}/${fileName}`),
        };
        videos.push(video);
    });
    videoTableCreator(videos);
}
module.exports = {
    videoInfoObjCreator,
}