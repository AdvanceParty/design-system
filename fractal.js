'use strict';
const path = require('path');
const fractal = (module.exports = require('@frctl/fractal').create());
const config = require('./settings');

// Project metadata
fractal.set('project.title', config.project.title);
fractal.set('project.version', config.project.version);
fractal.set('project.author', config.project.author);

// template engine
fractal.components.engine('@frctl/nunjucks');
fractal.components.set('ext', '.njk');

// Paths
fractal.components.set('path', path.join(__dirname, config.paths.components));
fractal.docs.set('path', path.join(__dirname, config.paths.docs));
fractal.web.set('static.path', path.join(__dirname, config.paths.staticAssets));
fractal.web.set('builder.dest', path.join(__dirname, config.paths.build));
