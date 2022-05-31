const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.js('public/js/app.js', 'dist')
 .setPublicPath('dist');

mix.scripts([
        "./resources/assets/js/jquery-3.5.1.slim.min.js",
        "./resources/assets/js/popper.js",
        "./resources/assets/js/bootstrap.min.js",
        "./resources/assets/js/slick.js",
    ], './public/assets/js/site_common.min.js')
    .styles([
        "./resources/assets/user/css/bootstrap.min.css",
        "./resources/assets/user/css/style.css",
    ], './public/assets/css/user_common.min.css')
    .styles([
        "./resources/assets/css/bootstrap.min.css",
        "./resources/assets/css/style.css",
        "./resources/assets/css/slick.css",
        "./resources/assets/css/slick-theme.css",
        "./resources/assets/css/responsive.css",
        "./resources/assets/fonts/stylesheet.css",
        "./resources/assets/css/animate.css",
    ], './public/assets/css/site_common.min.css')
    .scripts([
        "./resources/assets/user/js/jquery.min.js",
       "./resources/assets/user/js/bootstrap.min.js",
        "./resources/assets/user/js/web3.min.js",
        "./resources/assets/user/js/contract_abi.js",
        "./resources/assets/user/js/config.js",
        "./resources/assets/user/js/connectmetamask.js",
        "./resources/assets/user/js/common.js",
        "./dist/app.js"
    ], './public/assets/js/user_common.min.js',)


    