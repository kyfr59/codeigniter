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
const uglify  = require('gulp-uglify')
const concat  = require('gulp-concat')

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
    .pipe(concat('index.min.css'))
    .pipe(dest('./public/css/'))
    .pipe(browsersync.stream());
    done();
};

function watchFiles() {
    watch('./js/*.js', series(compileFrontJS));
    watch('./scss/*.scss', series(compileFrontCSS));
}

function compileFrontJS(done) {
    return src('js/*.js')
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(dest('./public/js'));
};

exports.serve = serve;
exports.default = series(serve, compileFrontCSS, compileFrontJS, watchFiles);