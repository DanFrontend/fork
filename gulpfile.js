'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer   = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
sass.compiler = require('node-sass');

gulp.task('scss', function () {
    return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS(''))
    .pipe(gulp.dest('dist/style'))
    .pipe(browserSync.reload({stream: true}));
 });

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('browser-sync', function(done) {
   browserSync.init({
       server: {
           baseDir: './'
       },
       notify: false
   });
   done();
});

gulp.task('clean', function() {
    return gulp.src('dist/*', {read: false})
    .pipe(clean());
});
gulp.task('dev', gulp.parallel('browser-sync',  function () {
    gulp.watch('src/scss/*.scss', gulp.series('scss'))
}))

gulp.task('imagemin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('dev', gulp.parallel('browser-sync',  function () {
   gulp.watch('src/scss/*.scss', gulp.series('scss'));
   gulp.watch('src/js/*.js', gulp.series('js'));
}))

gulp.task('build', gulp.series('clean', 'scss', 'js', 'imagemin', function (done) {
    done();
 }));


// 'use strict';
// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const browserSync = require('browser-sync');
// const autoprefixer   = require('gulp-autoprefixer');
// const concat = require('gulp-concat');
// const cleanCSS = require('gulp-clean-css');
// const uglify = require('gulp-uglify-es').default;
// const clean = require('gulp-clean');
// const imagemin = require('gulp-imagemin');
// sass.compiler = require('node-sass');
// ​
// gulp.task('scss', function () {
//     return gulp.src('src/scss/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer({
//         browsers: ['last 10 versions'],
//         cascade: false
//     }))
//     .pipe(concat('styles.min.css'))
//     .pipe(cleanCSS(''))
//     .pipe(gulp.dest('dist/style'))
//     .pipe(browserSync.reload({stream: true}));
//  });
// ​
// gulp.task('js', function() {
//     return gulp.src('src/js/*.js')
//     .pipe(concat('script.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'))
//     .pipe(browserSync.reload({stream: true}));
// })
// ​
// gulp.task('browser-sync', function(done) {
//    browserSync.init({
//        server: {
//            baseDir: './'
//        },
//        notify: false
//    });
//    done();
// });
// ​
// gulp.task('clean', function() {
//     return gulp.src('dist/*', {read: false})
//     .pipe(clean());
// });
// ​
// gulp.task('imagemin', () =>
//     gulp.src('src/img/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/img'))
// );
// ​
// gulp.task('dev', gulp.parallel('browser-sync',  function () {
//    gulp.watch('src/scss/*.scss', gulp.series('scss'));
//    gulp.watch('src/js/*.js', gulp.series('js'));
// }))
// ​
// ​
// gulp.task('build', gulp.series('clean', 'scss', 'js', 'imagemin', function (done) {
//     done();
//  }));
