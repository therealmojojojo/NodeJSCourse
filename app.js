var Emitter = require("emitter");

var emitter = new Emitter();
emitter.on('greet', function() {
    console.log("hi");
});
emitter.on('greet', function() {
    console.log("hello");
});
emitter.on('greet', function() {
    console.log("goodbye");
});

emitter.emit("greet");