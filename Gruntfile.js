 module.exports = function (grunt) {
         grunt.initConfig({
             less: {
                dev: {
                    files: {
                        "src/site.css": ["src/site.less"]
                    }
                }
            },
           cssmin: {
                all: {
                    files: {
                        "dist/site.min.css": "src/site.css"
                    }
                }
            },
            
            watch: {
                files: ["src/site.less"],
                tasks: ["less", "cssmin"]
            }
        });
       
       grunt.loadNpmTasks('grunt-contrib-less');
       grunt.loadNpmTasks('grunt-contrib-cssmin');
       grunt.loadNpmTasks('grunt-contrib-watch');
       
       grunt.registerTask("default", "less", "cssmin");
       grunt.registerTask("watchfile", "watch");
  };