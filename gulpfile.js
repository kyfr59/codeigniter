const sources = '.';
const config = {
    nodePath: sources + '/node_modules/',
    cssPath: sources + '/public/css/',
    scssPath: sources + '/scss/',
    jsPath: sources + '/public/js/',
    imgPath: sources + '/public/images/',
    fontsPath: sources + '/public/webfonts/'
};
const fontawesomeFonts = 'node_modules/@fortawesome/fontawesome-free/webfonts/**/*';

const plumber = require('gulp-plumber');
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync');

// serve (with browsersync)
function serve(done){
    browsersync.init({
        proxy: "http://localhost",
        online: true
    });
    done();
};

function compileFrontCSS(done) {
    return src('./scss/styles.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest('./public/css/'))
    .pipe(browsersync.stream());
    done();
};

function watchCSS() {
    return watch('./scss/*.scss', series(serve, compileFrontCSS));
}

exports.serve = serve;
exports.dev = series(serve, compileFrontCSS, watchCSS);
exports.build = series(compileFrontCSS);
exports.default = series(serve, compileFrontCSS, watchCSS);