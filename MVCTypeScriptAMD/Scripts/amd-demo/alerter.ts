/// <reference path="../typings/toastr/toastr.d.ts" />

import ds = require("./dataservice");

 export interface IAlerter {
    name: string;
    showMessage(): void;
}

var dataService = new ds.DataService();

export class Alerter implements IAlerter { 
    name = 'Kamran Pahlevani';
    showMessage() {
        var msg = dataService.getMessage();
        toastr.info(msg + ', ' + this.name);
    }
}