const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/app.js", "public/js")
    .react() // Enable React support
    .sass("resources/sass/app.scss", "public/css")
    .setPublicPath("public")
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve("resources/js"), // Alias for easier imports
            },
        },
        output: {
            chunkFilename: "js/[name].js", // For dynamic imports
            filename: "js/[name].js",
        },
    });
