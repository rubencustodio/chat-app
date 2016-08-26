"use strict";
var uuid_1 = require('../util/uuid');
var User = (function () {
    function User(name) {
        this.name = name;
        this.id = uuid_1.uuid();
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map