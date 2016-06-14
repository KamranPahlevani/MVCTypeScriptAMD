/// <reference path="../typings/requirejs/require.d.ts" />



require.config({
    baseUrl: "/Scripts/amd-jquery"
});

require(['bootstrapper'], 
    (bootstrapper) => {
     bootstrapper.run();
})
    