module.exports = function(grunt) {
    grunt.initConfig({
        //// 拷贝文件到发布目录，这样字体可被反复处理
        //copy: {
        //    main: {
        //        src: './',
        //        dest: './'
        //    },
        //},
        // 字蛛插件：压缩与转码静态页面中的 WebFont
        //'font-spider': {
        //    options: {},
        //    main: {
        //        src: './**/*.html'
        //    }
        //},
        'sass': {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'style/',
                    ext: '.css'
                }]
            }
        },
        'watch':{
            configFiles: {
                files: [ 'sass/*.scss' ],
                tasks:['sass']
            }
        }
    });
    //grunt.loadNpmTasks('grunt-font-spider');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.registerTask('default', ['font-spider']);
    grunt.registerTask("tscss",['sass','watch']);
};