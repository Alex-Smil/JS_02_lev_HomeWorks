var gulp     = require('gulp'),
	stylus   = require('gulp-stylus'),
	csso     = require('gulp-csso'),
	notify   = require("gulp-notify"),
	bs = require("browser-sync").create();


gulp.task('server', function() {
	bs.init({
		server: 'app/' // Указываем директорию откуда поднимать сервер
	});
	bs.watch('app/').on('change', bs.reload); // Автопрезегрузка при изменении в стилях
});


gulp.task('stylus', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(stylus())
		.on("error", notify.onError({
        	title: "style error"
      	}))
		.pipe(csso())
		.pipe(gulp.dest('app/css/'));
});

gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', gulp.series('stylus')) // В первый параметр можно передать массив с путями к файлам
});

gulp.task('default', gulp.series(
	'stylus',
	gulp.parallel('watch', 'server')
));

