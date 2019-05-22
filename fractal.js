'use strict';
const path = require('path');
const config = require('./settings');
const customTheme = require('./theme');
const filters = require('./filters');
const fractal = (module.exports = require('@frctl/fractal').create());
const engine = require('@frctl/nunjucks')({ filters });

// Project settings
fractal.set('project.title', config.project.title);
fractal.set('project.version', config.project.version);
fractal.set('project.author', config.project.author);

// template engine
fractal.components.engine(engine);
fractal.components.set('ext', '.njk');

// docs
fractal.docs.set('default.status', config.docs.defaultStatus);

// components
fractal.components.set('default.status', config.components.defaultStatus);

// Paths
fractal.components.set('path', path.join(__dirname, config.paths.components));
fractal.docs.set('path', path.join(__dirname, config.paths.docs));
fractal.web.set('static.path', path.join(__dirname, config.paths.staticAssets));
fractal.web.set('builder.dest', path.join(__dirname, config.paths.build));

// theme the fractaljs interface
fractal.web.theme(customTheme);
