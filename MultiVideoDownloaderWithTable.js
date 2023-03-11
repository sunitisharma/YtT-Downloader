const { multiVideoDownloader } = require("./multiVideoDownloader");

const urls = [
    'https://www.youtube.com/watch?v=a8DM-tD9w2I',
    // 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    // 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    // 'https://www.youtube.com/watch?v=G7RgN9ijwE4',
    // 'https://www.youtube.com/watch?v=IJNR2EpS0jw',
    // 'https://www.youtube.com/watch?v=_trU-Wt9ucI'
];


multiVideoDownloader(urls);