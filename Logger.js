(function() {
    this.Logger={};
    if (!window.console) window.console = {};
    if (!window.console.log) window.console.log = function() {};
    if (!window.console.warn) window.console.warn = function() {};
    if (!window.console.error) window.console.error = function() {};

    var console_log = console.log;
    var console_warn = console.warn;
    var console_error = console.error;

    Logger.enableLog = function enableLogger() {
        console.log = console_log;
        console.warn = console_warn;
        console.error = console_error
    };
    Logger.disableLog = function disableLogger() {
        console.log = function() {};
        console.warn = function() {};
        console.error = function() {};
    };

    function parse(arguments) {
        var string = "%c  ";
        for (var i = 0; i < arguments.length; i++) {
            string = string + arguments[i] + "  ";
        }
        return string;
    }
    Logger.info = function() {
        console.log(parse(arguments), 'border-radius:3px;background:#d9edf7;color: #31708f;border-color:#d6e9c6');
    }
    Logger.error = function() {
        console.error(arguments);
    }
    Logger.warn = function() {
        console.warn(arguments);
    }
    Logger.success = function() {
        console.log(parse(arguments), 'border-radius:3px;background:#dff0d8;color: #3c763d;border-color:#ebccd1');
    }

}());
