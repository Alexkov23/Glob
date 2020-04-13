function myModule() {
    this.hello = function() {
        return 'Hello1';
    };

    this.goodbye = function() {
        return 'goodbye!';
    }
}

module.exports = myModule;
