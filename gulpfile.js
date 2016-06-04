var gulp = require('gulp');

// 加载browserSync插件模块
var browserSync = require('browser-sync');

// 创建一个模块的对象
var bs = browserSync.create('my server');		//my server 只是一个任意命名的字符串


// 创建一个gulp任务
gulp.task('browser', function() {
    
	// 对象初始化
	bs.init({
		ui:false,
		server: {
			baseDir: "src",			// 相对于gulpfile.js的目录路径
			directory: true
		},
		notify: false,
		ghostMode:false,
		open: 'local',
	}, function(err,bs){
		
	})
})

// gulp的默认任务，如想了解task接口的具体用法，请自行查阅gulp文档。
gulp.task('default',['browser'] , function() {
	
	// 监听文件（被监听的文件一旦发生变化，就会刷新）
	gulp.watch('src/script/**', bs.reload)
	gulp.watch('src/html/*.html', bs.reload)
	gulp.watch('src/css/*.css', bs.reload)
	gulp.watch('src/index.html', bs.reload)
});