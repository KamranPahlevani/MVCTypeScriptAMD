import md = require("./alerter");

export function run() {
    var alerter = new md.Alerter();
    alerter.showMessage();
}

