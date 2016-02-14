'use strict';

module.exports = function(dependencySpec) {

  const concat = require('broccoli-concat');
  const merge = require('broccoli-merge-trees');

  const dependencies = [];

  for(let sourcePath in dependencySpec) {

    let targetPath = dependencySpec[sourcePath];

    dependencies.push(concat('node_modules', {
      inputFiles: [sourcePath],
      outputFile: `/${targetPath}`
    }));

  }

  return merge(dependencies);

};
