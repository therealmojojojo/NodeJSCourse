function Emitter () {
    this.props = {};
}

Emitter.prototype.on = function (type, listener) {
    this.props[type] = this.props[type] || [];
    this.props[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    this.props[type] = this.props[type] || [];
    this.props[type].forEach(function(listener) {
        listener();
    });
}

module.exports = Emitter;