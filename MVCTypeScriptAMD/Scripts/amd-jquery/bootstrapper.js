define(["require", "exports", "./alerter"], function (require, exports, md) {
    "use strict";
    function run() {
        var alerter = new md.Alerter();
        alerter.showMessage();
    }
    exports.run = run;
});
//# sourceMappingURL=bootstrapper.js.map