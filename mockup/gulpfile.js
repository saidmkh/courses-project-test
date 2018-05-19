var gulp 		 = require('gulp');
var	sass 		 = require('gulp-sass');
var	autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('relo', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', function() {
	gulp.watch(['src/sass/**/*.sass', 'src/sass/**/*.scss'], ['sass']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'relo']);