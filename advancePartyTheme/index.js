// AdvanceParty Theme -- extends default mandelbrot theme

const theme = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

module.exports = theme({
  skin: 'black',
  format: 'json',
  panels: ['html', 'context', 'resources', 'info', 'view'],
});
