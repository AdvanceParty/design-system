# Simple Site Starter

Work in progress. A bundle of sass files which can be used as the foundation for a responsive website.

The scss files can be used without any additional frameworks/libraries, but will also play perfectly nicely with whatever tooling and platforms you dig the most.

The dist folder also includes compiled css as a build-free alternate to the sass files.

## Live Preview

This project uses [FractalJS](https://fractal.build) to generate a set of HTML pages which demo the included styles and how to implement them.

- Use `npm run build` to generate the styleguide into the `/styleguide` directory.
- Use `npm run start` to generate the style and start a local webserver and serve the styleguide on http://localhost:3000.

## Using the CSS

Clone/download the `dist/css` or `dist/scss` direectory and stick it into your project.

## Customising the SCSS files

Go nuts, but start with the `_settings.scss` files. Nost of the config stuff you'll be looking for is in this file, including the typography settings for font sizes, scale factors and vertivcal rhythm.

Full documentation will be added as part of v1 release.

### Resources

- [FractalJS](https://fractal.build)
