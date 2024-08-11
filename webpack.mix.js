const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve("resources/js"),
            },
        },
    })
    .vite("resources/js/app.jsx", {
        build: {
            outDir: "public/js",
            manifest: true,
            rollupOptions: {
                input: "resources/js/app.jsx",
            },
        },
    })
    .vue()
    .version();
