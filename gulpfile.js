var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

gulp.task("watch", function() {
  gulp.watch("inc/scss/**/*.scss", gulp.series("sass"));
});

gulp.task("sass", function() {
  return gulp
    .src("inc/scss/**/*.scss")
    .pipe(sass())
    .on(
      "error",
      notify.onError(function(error) {
        return error.message;
      })
    )
    .pipe(gulp.dest("inc/css/"));
});
