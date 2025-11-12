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
exports.Room = void 0;
var typeorm_1 = require("typeorm");
var Scenario_js_1 = require("./Scenario.js");
var User_js_1 = require("./User.js");
var Room = exports.Room = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _gm_decorators;
    var _gm_initializers = [];
    var _scenario_decorators;
    var _scenario_initializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _currentScene_decorators;
    var _currentScene_initializers = [];
    var _scenesHistory_decorators;
    var _scenesHistory_initializers = [];
    var _maxPlayers_decorators;
    var _maxPlayers_initializers = [];
    var _isPrivate_decorators;
    var _isPrivate_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var Room = _classThis = /** @class */ (function () {
        function Room_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.gm = __runInitializers(this, _gm_initializers, void 0);
            // Relation avec PlayerInRoom (plus flexible que User[])
            // @OneToMany(() => PlayerInRoom, pir => pir.room)
            // players!: PlayerInRoom[];
            this.scenario = __runInitializers(this, _scenario_initializers, void 0);
            this.status = __runInitializers(this, _status_initializers, void 0);
            this.currentScene = __runInitializers(this, _currentScene_initializers, void 0);
            this.scenesHistory = __runInitializers(this, _scenesHistory_initializers, void 0);
            this.maxPlayers = __runInitializers(this, _maxPlayers_initializers, void 0);
            this.isPrivate = __runInitializers(this, _isPrivate_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.createdAt = __runInitializers(this, _createdAt_initializers, void 0);
            this.updatedAt = __runInitializers(this, _updatedAt_initializers, void 0);
        }
        return Room_1;
    }());
    __setFunctionName(_classThis, "Room");
    (function () {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _name_decorators = [(0, typeorm_1.Column)()];
        _gm_decorators = [(0, typeorm_1.ManyToOne)(function () { return User_js_1.User; }, { nullable: false })];
        _scenario_decorators = [(0, typeorm_1.ManyToOne)(function () { return Scenario_js_1.Scenario; }, { eager: true, nullable: true })];
        _status_decorators = [(0, typeorm_1.Column)({ default: 'waiting' })];
        _currentScene_decorators = [(0, typeorm_1.Column)('int', { default: 0 })];
        _scenesHistory_decorators = [(0, typeorm_1.Column)('simple-array', { default: '' })];
        _maxPlayers_decorators = [(0, typeorm_1.Column)({ default: 6 })];
        _isPrivate_decorators = [(0, typeorm_1.Column)({ default: false })];
        _password_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updatedAt_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _gm_decorators, { kind: "field", name: "gm", static: false, private: false, access: { has: function (obj) { return "gm" in obj; }, get: function (obj) { return obj.gm; }, set: function (obj, value) { obj.gm = value; } } }, _gm_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _scenario_decorators, { kind: "field", name: "scenario", static: false, private: false, access: { has: function (obj) { return "scenario" in obj; }, get: function (obj) { return obj.scenario; }, set: function (obj, value) { obj.scenario = value; } } }, _scenario_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } } }, _status_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _currentScene_decorators, { kind: "field", name: "currentScene", static: false, private: false, access: { has: function (obj) { return "currentScene" in obj; }, get: function (obj) { return obj.currentScene; }, set: function (obj, value) { obj.currentScene = value; } } }, _currentScene_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _scenesHistory_decorators, { kind: "field", name: "scenesHistory", static: false, private: false, access: { has: function (obj) { return "scenesHistory" in obj; }, get: function (obj) { return obj.scenesHistory; }, set: function (obj, value) { obj.scenesHistory = value; } } }, _scenesHistory_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _maxPlayers_decorators, { kind: "field", name: "maxPlayers", static: false, private: false, access: { has: function (obj) { return "maxPlayers" in obj; }, get: function (obj) { return obj.maxPlayers; }, set: function (obj, value) { obj.maxPlayers = value; } } }, _maxPlayers_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isPrivate_decorators, { kind: "field", name: "isPrivate", static: false, private: false, access: { has: function (obj) { return "isPrivate" in obj; }, get: function (obj) { return obj.isPrivate; }, set: function (obj, value) { obj.isPrivate = value; } } }, _isPrivate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } } }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } } }, _createdAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } } }, _updatedAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Room = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Room = _classThis;
}();
