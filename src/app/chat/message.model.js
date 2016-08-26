"use strict";
var uuid_1 = require('../util/uuid');
var Message = (function () {
    function Message(obj) {
        this.id = obj && obj.id || uuid_1.uuid();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map