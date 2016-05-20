"use strict";

const gulp        = require('gulp');
const del         = require('del');
const pngquant    = require('imagemin-pngquant');
const browserSync = require('browser-sync').create();
const $           = require("gulp-load-plugins")();

gulp.task("clean", function(){
	return del("build");
});

gulp.task("html", function(){
		return gulp.src("src/pages/*.jade")
		.pipe($.plumber({
			errorHandler: $.notify.onError(function(err){
				return {
					title:   "HTML",
					message: err.message
				}
			})
		}))
		.pipe($.jade({
			pretty: true
		}))
		.pipe(gulp.dest("build"));
});

gulp.task("css", function(){
		return gulp.src("src/scss/main.scss")
		.pipe($.plumber({
			errorHandler: $.notify.onError(function(err){
				return {
					title:   "CSS",
					message: err.message
				}
			})
		}))
		.pipe($.newer("build"))
		.pipe($.sourcemaps.init())
		.pipe($.sass())
		.pipe($.autoprefixer({
			browsers: ['last 2 versions'],
			cascade:  false
		}))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest("build"));
});

gulp.task("js", function(){
		return gulp.src("src/js/main.js")
		.pipe($.plumber({
			errorHandler: $.notify.onError(function(err){
				return {
					title:   "JS",
					message: err.message
				}
			})
		}))
		.pipe($.rigger())
		.pipe($.babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest("build"));
});

gulp.task("img", function(){
		return gulp.src("src/img/**/*.*")
			.pipe($.newer("build/img"))
			.pipe($.imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use:         [pngquant()],
				interlaced:  true }))
			.pipe(gulp.dest("build/img"));
});

gulp.task("serve", function(){
		browserSync.init({
		server: "build"
		});

		browserSync.watch("build" + "/**/*.*").on("change", browserSync.reload);
});

gulp.task("build", gulp.parallel("html", "css", "js", "img"));

gulp.task("watch", function() {
	gulp.watch("src/img/**/*.*", gulp.series('img'));
	gulp.watch("src/**/*.jade", gulp.series('html'));
	gulp.watch('src/**/*.scss', gulp.series('css'));
	gulp.watch('src/**/*.js', gulp.series('js'));
});

gulp.task("default",
	gulp.series("build", gulp.parallel("watch", "serve"))
);
