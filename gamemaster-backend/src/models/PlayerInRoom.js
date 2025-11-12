"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInRoom = void 0;
var typeorm_1 = require("typeorm");
var Room_js_1 = require("./Room.js");
var User_js_1 = require("./User.js");
var PlayerInRoom = exports.PlayerInRoom = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _room_decorators;
    var _room_initializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _character_decorators;
    var _character_initializers = [];
    var _joinedAt_decorators;
    var _joinedAt_initializers = [];
    var _lastSeen_decorators;
    var _lastSeen_initializers = [];
    var PlayerInRoom = _classThis = /** @class */ (function () {
        function PlayerInRoom_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.room = __runInitializers(this, _room_initializers, void 0);
            this.user = __runInitializers(this, _user_initializers, void 0);
            this.role = __runInitializers(this, _role_initializers, void 0);
            this.character = __runInitializers(this, _character_initializers, void 0); // Structure complète L5R (anneaux, compétences, etc.)
            this.joinedAt = __runInitializers(this, _joinedAt_initializers, void 0);
            this.lastSeen = __runInitializers(this, _lastSeen_initializers, void 0);
        }
        return PlayerInRoom_1;
    }());
    __setFunctionName(_classThis, "PlayerInRoom");
    (function () {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _room_decorators = [(0, typeorm_1.ManyToOne)(function () { return Room_js_1.Room; }, { onDelete: 'CASCADE' })];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return User_js_1.User; }, { eager: true, onDelete: 'CASCADE' })];
        _role_decorators = [(0, typeorm_1.Column)({ default: 'player' })];
        _character_decorators = [(0, typeorm_1.Column)('jsonb', { nullable: true })];
        _joinedAt_decorators = [(0, typeorm_1.Column)({ type: 'timestamp', default: function () { return 'CURRENT_TIMESTAMP'; } })];
        _lastSeen_decorators = [(0, typeorm_1.Column)({ type: 'timestamp', nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _room_decorators, { kind: "field", name: "room", static: false, private: false, access: { has: function (obj) { return "room" in obj; }, get: function (obj) { return obj.room; }, set: function (obj, value) { obj.room = value; } } }, _room_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } } }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } } }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _character_decorators, { kind: "field", name: "character", static: false, private: false, access: { has: function (obj) { return "character" in obj; }, get: function (obj) { return obj.character; }, set: function (obj, value) { obj.character = value; } } }, _character_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _joinedAt_decorators, { kind: "field", name: "joinedAt", static: false, private: false, access: { has: function (obj) { return "joinedAt" in obj; }, get: function (obj) { return obj.joinedAt; }, set: function (obj, value) { obj.joinedAt = value; } } }, _joinedAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lastSeen_decorators, { kind: "field", name: "lastSeen", static: false, private: false, access: { has: function (obj) { return "lastSeen" in obj; }, get: function (obj) { return obj.lastSeen; }, set: function (obj, value) { obj.lastSeen = value; } } }, _lastSeen_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        PlayerInRoom = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PlayerInRoom = _classThis;
}();
