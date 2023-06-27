var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.listeners = {};
    }
    EventEmitter.prototype.addListener = function (event, listener) {
        //@ts-ignore
        this.listeners[event] = listener;
    };
    //@ts-ignore
    EventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //@ts-ignore
        var listener = this.listeners[event];
        if (listener) {
            listener.apply(void 0, args);
        }
    };
    return EventEmitter;
}());
var emitter = new EventEmitter();
emitter.addListener('foo', function (num) {
    console.log("Received foo event with number: ".concat(num));
});
emitter.addListener('bar', function (str, flag) {
    console.log("Received bar event with string: ".concat(str, " and flag: ").concat(flag));
});
emitter.emit('foo', 43, 'hi'); // Output: Received foo event with number: 42
emitter.emit('bar', 'hello', true); // Output: Received bar event with string: hello and flag: true
