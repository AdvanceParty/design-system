const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

module.exports = mandelbrot({
  skin: 'black',
  format: 'json',
  panels: ['html', 'context', 'resources', 'info', 'view'],
});
