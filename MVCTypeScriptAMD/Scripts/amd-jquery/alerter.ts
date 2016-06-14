/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" /> 

import ds = require("./dataservice");

 export interface IAlerter {
    name: string;
    showMessage(): void;
}

declare var $: JQueryStatic;
var dataService = new ds.DataService();

export class Alerter implements IAlerter { 
    name = 'Kamran Pahlevani';
    showMessage() {
        var msg = dataService.getMessage();
        $('#messagebox').text(msg + ', ' + this.name);
        toastr.info(msg + ', ' + this.name);
    }
}