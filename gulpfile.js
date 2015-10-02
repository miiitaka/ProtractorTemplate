var
  gulp = require('gulp'),
  webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  'use strict';

  gulp.src('')
    .pipe(webserver({
      host: 'localhost',
      port: '8000',
      livereload: false,
      directoryListing: false,
      open: false,
      fallback: 'index.html' //For AngularJS Html5Mode
    }));
});

gulp.task('dev', ['webserver']);