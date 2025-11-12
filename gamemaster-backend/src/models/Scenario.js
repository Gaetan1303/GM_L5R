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
exports.Scenario = void 0;
var typeorm_1 = require("typeorm");
var Scene_js_1 = require("./Scene.js");
// [MODEL] Classe Scenario - encapsule la logique métier et les propriétés d'un scénario
var Scenario = exports.Scenario = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _synopsis_decorators;
    var _synopsis_initializers = [];
    var _hooks_decorators;
    var _hooks_initializers = [];
    var _scenes_decorators;
    var _scenes_initializers = [];
    var _npcs_decorators;
    var _npcs_initializers = [];
    var _factions_decorators;
    var _factions_initializers = [];
    var _locations_decorators;
    var _locations_initializers = [];
    var _rewards_decorators;
    var _rewards_initializers = [];
    var _difficulty_decorators;
    var _difficulty_initializers = [];
    var _tags_decorators;
    var _tags_initializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var Scenario = _classThis = /** @class */ (function () {
        function Scenario_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.synopsis = __runInitializers(this, _synopsis_initializers, void 0);
            this.hooks = __runInitializers(this, _hooks_initializers, void 0);
            this.scenes = __runInitializers(this, _scenes_initializers, void 0);
            // Utilise les interfaces pour typer les champs JSONB
            this.npcs = __runInitializers(this, _npcs_initializers, void 0);
            this.factions = __runInitializers(this, _factions_initializers, void 0);
            this.locations = __runInitializers(this, _locations_initializers, void 0);
            this.rewards = __runInitializers(this, _rewards_initializers, void 0);
            this.difficulty = __runInitializers(this, _difficulty_initializers, void 0);
            this.tags = __runInitializers(this, _tags_initializers, void 0);
            this.createdAt = __runInitializers(this, _createdAt_initializers, void 0);
            this.updatedAt = __runInitializers(this, _updatedAt_initializers, void 0);
        }
        return Scenario_1;
    }());
    __setFunctionName(_classThis, "Scenario");
    (function () {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _title_decorators = [(0, typeorm_1.Column)()];
        _synopsis_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _hooks_decorators = [(0, typeorm_1.Column)('simple-array', { nullable: true })];
        _scenes_decorators = [(0, typeorm_1.OneToMany)(function () { return Scene_js_1.Scene; }, function (scene) { return scene.scenario; }, { cascade: true, eager: true })];
        _npcs_decorators = [(0, typeorm_1.Column)('jsonb', { nullable: true })];
        _factions_decorators = [(0, typeorm_1.Column)('jsonb', { nullable: true })];
        _locations_decorators = [(0, typeorm_1.Column)('jsonb', { nullable: true })];
        _rewards_decorators = [(0, typeorm_1.Column)('jsonb', { nullable: true })];
        _difficulty_decorators = [(0, typeorm_1.Column)({ default: 'standard' })];
        _tags_decorators = [(0, typeorm_1.Column)('simple-array', { nullable: true })];
        _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updatedAt_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _synopsis_decorators, { kind: "field", name: "synopsis", static: false, private: false, access: { has: function (obj) { return "synopsis" in obj; }, get: function (obj) { return obj.synopsis; }, set: function (obj, value) { obj.synopsis = value; } } }, _synopsis_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _hooks_decorators, { kind: "field", name: "hooks", static: false, private: false, access: { has: function (obj) { return "hooks" in obj; }, get: function (obj) { return obj.hooks; }, set: function (obj, value) { obj.hooks = value; } } }, _hooks_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _scenes_decorators, { kind: "field", name: "scenes", static: false, private: false, access: { has: function (obj) { return "scenes" in obj; }, get: function (obj) { return obj.scenes; }, set: function (obj, value) { obj.scenes = value; } } }, _scenes_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _npcs_decorators, { kind: "field", name: "npcs", static: false, private: false, access: { has: function (obj) { return "npcs" in obj; }, get: function (obj) { return obj.npcs; }, set: function (obj, value) { obj.npcs = value; } } }, _npcs_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _factions_decorators, { kind: "field", name: "factions", static: false, private: false, access: { has: function (obj) { return "factions" in obj; }, get: function (obj) { return obj.factions; }, set: function (obj, value) { obj.factions = value; } } }, _factions_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _locations_decorators, { kind: "field", name: "locations", static: false, private: false, access: { has: function (obj) { return "locations" in obj; }, get: function (obj) { return obj.locations; }, set: function (obj, value) { obj.locations = value; } } }, _locations_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rewards_decorators, { kind: "field", name: "rewards", static: false, private: false, access: { has: function (obj) { return "rewards" in obj; }, get: function (obj) { return obj.rewards; }, set: function (obj, value) { obj.rewards = value; } } }, _rewards_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _difficulty_decorators, { kind: "field", name: "difficulty", static: false, private: false, access: { has: function (obj) { return "difficulty" in obj; }, get: function (obj) { return obj.difficulty; }, set: function (obj, value) { obj.difficulty = value; } } }, _difficulty_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tags_decorators, { kind: "field", name: "tags", static: false, private: false, access: { has: function (obj) { return "tags" in obj; }, get: function (obj) { return obj.tags; }, set: function (obj, value) { obj.tags = value; } } }, _tags_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } } }, _createdAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } } }, _updatedAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Scenario = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Scenario = _classThis;
}();
