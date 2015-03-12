GRUNT & JEKYLL & CHEMBIOHUB-THEME INTEGRATION

The idea is to have all theme related files (sass/css, html header & footer) installed from a github subrepo dependency.

These files will then be placed in their correct places in the file system so that the jekyll build process includes them in the constructed filesystem (_site folder).

These processes will be performed by Grunt. This should also allow different build configurations (development/testing/live) as necessary.

Processes:
- Convert current css to sass
- Add current header/footer/css to chembiohub-theme
- manually include chembiohub-theme folder in chembiohub-site
- write grunt scripts to move files to the correct location
- configure grunt to run jekyll build
- configure "development" grunt task to also run and watch for changes

Also Bower to load JS dependencies?