var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

gulp.task("watch", function() {
  gulp.watch("public/scss/**/*.scss", gulp.series("sass"));
});

gulp.task("sass", function() {
  return gulp
    .src("public/scss/**/*.scss")
    .pipe(sass())
    .on(
      "error",
      notify.onError(function(error) {
        return error.message;
      })
    )
    .pipe(gulp.dest("public/css/"));
});
