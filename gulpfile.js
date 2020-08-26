const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(csso())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

//Imagemin

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))

    .pipe(gulp.dest("build/img"))
}

exports.images = images;

//webp

const webp = require("gulp-webp");

const webpOpti = () => {
  return gulp.src("source/img/**/*.{(png,jpg)}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}

exports.webp = webpOpti;

//html

const html = () => {
  return gulp.src("source/**/*.html")
  .pipe(gulp.dest("build/"))
}

exports.html = html;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

//copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
}

exports.copy = copy;

//clean

const del = require("del");

const clean = () => {
  return del("build");
}

exports.clean = clean;

//build

exports.default = gulp.series(
  styles, server, watcher
);

exports.build = gulp.series(
  clean, images, styles, copy, html
);
