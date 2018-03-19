const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const postcssimport = require("postcss-import");
const vars = require("postcss-simple-vars");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const nest = require("postcss-nested");
const colors = require("postcss-sass-color-functions");

gulp.task("ccss", () =>
  gulp
    .src("./themes/l0rd-theme/source/css/cc-ss.css")
    .pipe(postcss([autoprefixer(), postcssimport(), vars()]))
    .pipe(cssnano())
    .pipe(rename("cc-ss.min.css"))
    .pipe(gulp.dest("./themes/l0rd-theme/source/css/"))
);

gulp.task("custom-css", () =>
  gulp
    .src("./themes/l0rd-theme/source/css/style.css")
    .pipe(postcss([autoprefixer(), postcssimport(), vars(), nest(), colors()]))
    .pipe(cssnano())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./themes/l0rd-theme/source/css/"))
);

gulp.task("styles", ["ccss", "custom-css"]);
