module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			/*dist: {
				files: {
					'chembiohub/static/css/main.css' : 'chembiohub/templates/sass/main.scss'
				}
			}*/
		},
		watch: {
			//css: {
			//	files: '**/*.scss',
			//	tasks: ['sass']
			//}
		},
		cssmin: {
		  my_target: {
		   files: [{
		     expand: true,
		     cwd: '_site/assets/css/',
		     src: ['clean.css'],
		     dest: '_site/assets/css/min/',
      	  	 ext: '.min.css'
		   }]
		  }
		},
		uglify: {
			my_target: {
		      files: [{
		          expand: true,
		          cwd: 'assets/js/',
		          src: '**/*.js',
		          dest: 'assets/js/min/'
		      }]
		    }
		},
		//from yotfh...
	    imagemin: {
	      options: {
	        optimizationLevel: 7 // 7 = 240 trials
	      },
	      files: {
	        expand: true, // Enable dynamic expansion
	        cwd: '_site/assets/img', // Where to find images
	        src: '*.{png,PNG,jpg,JPG,gif,GIF,jpeg,JPEG}', // Search for all image types
	        dest: '_site/assets/img' // Where to save compressed images to (overwrite)
	      }
	    },
	    uncss: {
	      dist: {
	        options: {
	          stylesheets: ['assets/css/bootstrap.css',
	          				//'assets/css/cbh_template_header.css',
	          				'assets/css/bootstrapValidator.min.css',
	          				'assets/css/font.css', 
	          				'assets/css/main.css', ]
	          				//'assets/css/symposium.css', ] // List of stylesheets to clean up
	        },
	        files: {
	          '_site/assets/css/clean.css': ['_site/index.html','_site/about/index.html','_site/events/index.html','_site/symposium2014/index.html','_site/blog/**/*.html',], // What files to check for usage
	        }
	      }
	    },
	    processhtml: {
	    	options: {

	    	},
	    	dist: {
		      files: [
			      {
			      	expand: true,
			      	cwd: '_site/',      // Src matches are relative to this path.
	          		src: ['**/*.html'],
	          		dest: '_site/',
			        /*'_site/index.html': ['_site/index.html'],
			        '_site/about/index.html': ['_site/about/index.html'],
			        '_site/events/index.html': ['_site/events/index.html'],
			        '_site/symposium2014/index.html': ['_site/symposium2014/index.html'],*/

			      },
		      ]
		    }
	    }
	});
	//grunt.loadNpmTasks('grunt-contrib-sass');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-uncss');
	//grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-processhtml');

	//limit to used css in one file, minify and change reference in html to new file. Also compress images.
	grunt.registerTask('default',['imagemin', 'uncss', 'cssmin', 'uglify', 'processhtml']);
	grunt.registerTask('css',['uncss','cssmin', 'processhtml']);
}