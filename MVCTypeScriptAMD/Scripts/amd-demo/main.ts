/// <reference path="../typings/requirejs/require.d.ts" />



require.config({
    baseUrl: "/Scripts/amd-demo"
});

require(['bootstrapper'], (bootstrapper) => {
    bootstrapper.run();
})
    