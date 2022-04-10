const {
    src,
    dest,
    watch
} = require('gulp');

const minifyCss = require('gulp-clean-css');
const concat = require('gulp-concat');

const bundleCSS = () => {
    return src('./public/css/*.css')
        .pipe(minifyCss())
        .pipe(concat('bundle.css'))
        .pipe(dest('./public/gulp/css'));
}

const watchCSS = () => {
    watch('./public/css/*.css', bundleCSS);
};

exports.bundleCSS = bundleCSS;
exports.watchCSS = watchCSS;