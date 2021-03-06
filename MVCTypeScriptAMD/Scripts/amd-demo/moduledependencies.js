/// <reference path="../typings/toastr/toastr.d.ts" />
define(["require", "exports", "./dataservice"], function (require, exports, ds) {
    "use strict";
    var dataService = new ds.DataService();
    var Alerter = (function () {
        function Alerter() {
            this.name = 'Kamran Pahlevani';
        }
        Alerter.prototype.showMessage = function () {
            var msg = dataService.getMessage();
            toastr.info(msg + ', ' + this.name);
        };
        return Alerter;
    }());
    exports.Alerter = Alerter;
});
//# sourceMappingURL=moduledependencies.js.map