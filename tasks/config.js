const destPath = 'build';
const srcPath = 'app';

const config = {
    src: {
        root: srcPath,
        templates: srcPath + '/templates',
        pages: srcPath + '/pages',
        sass: srcPath + '/sass',
        js: srcPath + '/js',
        fonts: srcPath + '/fonts',
        img: srcPath + '/img',
        libs: srcPath + '/libs',
    },
    dest: {
        root: destPath,
        html: destPath,
        css: destPath + '/css',
        js: destPath + '/js',
        fonts: destPath + '/fonts',
        img: destPath + '/img',
        libs: destPath + '/libs'
    }
}

module.exports = config;