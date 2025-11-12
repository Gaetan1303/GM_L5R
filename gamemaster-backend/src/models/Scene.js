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
exports.Scene = void 0;
var typeorm_1 = require("typeorm");
var Scenario_js_1 = require("./Scenario.js");
var Scene = exports.Scene = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _objectives_decorators;
    var _objectives_initializers = [];
    var _challenges_decorators;
    var _challenges_initializers = [];
    var _scenario_decorators;
    var _scenario_initializers = [];
    var Scene = _classThis = /** @class */ (function () {
        function Scene_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.objectives = __runInitializers(this, _objectives_initializers, void 0);
            this.challenges = __runInitializers(this, _challenges_initializers, void 0);
            this.scenario = __runInitializers(this, _scenario_initializers, void 0);
        }
        return Scene_1;
    }());
    __setFunctionName(_classThis, "Scene");
    (function () {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _title_decorators = [(0, typeorm_1.Column)()];
        _description_decorators = [(0, typeorm_1.Column)('text')];
        _objectives_decorators = [(0, typeorm_1.Column)('simple-array', { nullable: true })];
        _challenges_decorators = [(0, typeorm_1.Column)('simple-array', { nullable: true })];
        _scenario_decorators = [(0, typeorm_1.ManyToOne)(function () { return Scenario_js_1.Scenario; }, function (scenario) { return scenario.scenes; }, { onDelete: 'CASCADE' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } } }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _objectives_decorators, { kind: "field", name: "objectives", static: false, private: false, access: { has: function (obj) { return "objectives" in obj; }, get: function (obj) { return obj.objectives; }, set: function (obj, value) { obj.objectives = value; } } }, _objectives_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _challenges_decorators, { kind: "field", name: "challenges", static: false, private: false, access: { has: function (obj) { return "challenges" in obj; }, get: function (obj) { return obj.challenges; }, set: function (obj, value) { obj.challenges = value; } } }, _challenges_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _scenario_decorators, { kind: "field", name: "scenario", static: false, private: false, access: { has: function (obj) { return "scenario" in obj; }, get: function (obj) { return obj.scenario; }, set: function (obj, value) { obj.scenario = value; } } }, _scenario_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Scene = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Scene = _classThis;
}();
