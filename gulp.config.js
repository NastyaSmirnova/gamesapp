module.exports = function () {
  var root = './';
  var sources = root + 'sources/';
  var assets = sources + 'assets/';
  var app = sources + 'app/';
  var assetsStylesFolder = assets + 'styles/';
  var bc = 'bower_components/';
  
  var config = {
    root: root,
    app: app,
    bc: bc,
    index: root + 'index.html',
    assetsStylesFolder: assetsStylesFolder,
    indexCss: app + 'index.css',
    sourcesStyles: app + '**/*.css',
    sourcesScripts: app + '**/*.js',
    styles: assetsStylesFolder + '/*.css',
    scripts: [
      app + '**/*.js',
      root + '*.js'
    ]
  };

  return config;
};
