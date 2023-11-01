const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.js('resources/js/main.js', 'public/js');

// CONTROLLERS
mix.js('resources/js/controllers/Controller.js', 'public/js/controllers');
mix.js('resources/js/controllers/UsersController.js', 'public/js/controllers');

// SERVICES
mix.js('resources/js/services/Service.js', 'public/js/services');
mix.js('resources/js/services/UsersService.js', 'public/js/services');

// HELPERS
mix.js('resources/js/helpers/FormatHelper.js', 'public/js/services');
mix.js('resources/js/helpers/ValidateHelper.js', 'public/js/services');
