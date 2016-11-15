/*
Autor: Genaro Contreras Gutierrez
Email: genaro_contreras@hotmail.com

*/
(function() {
    this.Logger={};
    if (!window.console) window.console = {};
    if (!window.console.log) window.console.log = function() {};

    var console_log = console.log;

    Logger.enableLog = function enableLogger() {
        console.log = console_log;
    };
    Logger.disableLog = function disableLogger() {
        console.log = function() {};
    };

    function parse(arguments) {
        var string = "%c["+new Date().toLocaleString()+"]  ";
        for (var i = 0; i < arguments.length; i++) {
            string = string + arguments[i] + "  ";
        }
        return string;
    }
    Logger.success = function() {
        console.log(parse(arguments), 'font-weight: bold;border-radius:3px;/*background:#dff0d8;*/color: #3c763d;border-color:#ebccd1');
    }
    Logger.info = function() {
        console.log(parse(arguments), 'font-weight: bold;border-radius:3px;/*background:#d9edf7*/;color: #31708f;border-color:#d6e9c6');
    }
    Logger.warning = function() {
        console.log(parse(arguments), 'font-weight: bold;border-radius:3px;/*background:#fcf8e3*/;color: #8a6d3b;border-color:#faebcc');
    }
    Logger.danger = function() {
        console.log(parse(arguments), 'font-weight: bold;border-radius:3px;/*background:#f2dede*/;color: #a94442;border-color:#ebccd1');
    }

}());
