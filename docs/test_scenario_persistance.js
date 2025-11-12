"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_js_1 = require("../gamemaster-backend/src/data-source.js");
var User_js_1 = require("../gamemaster-backend/src/models/User.js");
var Scenario_js_1 = require("../gamemaster-backend/src/models/Scenario.js");
var Room_js_1 = require("../gamemaster-backend/src/models/Room.js");
var PlayerInRoom_js_1 = require("../gamemaster-backend/src/models/PlayerInRoom.js");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var gm, joueur1, joueur2, joueur3, scenario, room, pir1, pir2, pir3, pirGM, rooms, players;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_js_1.AppDataSource.initialize()];
                case 1:
                    _a.sent();
                    console.log('Connexion à la base OK');
                    gm = data_source_js_1.AppDataSource.manager.create(User_js_1.User, {
                        email: 'gm_test@l5r.com',
                        password: 'hash_gm',
                        name: 'GM Test',
                        role: 'GM',
                    });
                    joueur1 = data_source_js_1.AppDataSource.manager.create(User_js_1.User, {
                        email: 'joueur1_test@l5r.com',
                        password: 'hash_j1',
                        name: 'Joueur 1 Test',
                        role: 'joueur',
                    });
                    joueur2 = data_source_js_1.AppDataSource.manager.create(User_js_1.User, {
                        email: 'joueur2_test@l5r.com',
                        password: 'hash_j2',
                        name: 'Joueur 2 Test',
                        role: 'joueur',
                    });
                    joueur3 = data_source_js_1.AppDataSource.manager.create(User_js_1.User, {
                        email: 'joueur3_test@l5r.com',
                        password: 'hash_j3',
                        name: 'Joueur 3 Test',
                        role: 'joueur',
                    });
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.save([gm, joueur1, joueur2, joueur3])];
                case 2:
                    _a.sent();
                    console.log('Utilisateurs créés');
                    scenario = data_source_js_1.AppDataSource.manager.create(Scenario_js_1.Scenario, {
                        title: 'Scénario Test Persistance',
                        synopsis: 'Test persistance avec 3 joueurs et 1 GM',
                        hooks: ['hook1', 'hook2'],
                        difficulty: 'standard',
                        tags: ['test'],
                    });
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.save(scenario)];
                case 3:
                    _a.sent();
                    console.log('Scénario créé');
                    room = data_source_js_1.AppDataSource.manager.create(Room_js_1.Room, {
                        name: 'Room Test',
                        gm: gm,
                        scenario: scenario,
                        status: 'active',
                        currentScene: 0,
                        scenesHistory: [],
                        maxPlayers: 6,
                        isPrivate: false,
                    });
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.save(room)];
                case 4:
                    _a.sent();
                    console.log('Room créée');
                    pir1 = data_source_js_1.AppDataSource.manager.create(PlayerInRoom_js_1.PlayerInRoom, { room: room, user: joueur1, role: 'player' });
                    pir2 = data_source_js_1.AppDataSource.manager.create(PlayerInRoom_js_1.PlayerInRoom, { room: room, user: joueur2, role: 'player' });
                    pir3 = data_source_js_1.AppDataSource.manager.create(PlayerInRoom_js_1.PlayerInRoom, { room: room, user: joueur3, role: 'player' });
                    pirGM = data_source_js_1.AppDataSource.manager.create(PlayerInRoom_js_1.PlayerInRoom, { room: room, user: gm, role: 'gm' });
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.save([pir1, pir2, pir3, pirGM])];
                case 5:
                    _a.sent();
                    console.log('Joueurs et GM ajoutés à la room');
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.find(Room_js_1.Room, { relations: ['gm', 'scenario'] })];
                case 6:
                    rooms = _a.sent();
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.find(PlayerInRoom_js_1.PlayerInRoom, { relations: ['room', 'user'] })];
                case 7:
                    players = _a.sent();
                    console.log('Rooms:', rooms);
                    console.log('Players in room:', players);
                    // 6. Nettoyage
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.delete(PlayerInRoom_js_1.PlayerInRoom, { room: { id: room.id } })];
                case 8:
                    // 6. Nettoyage
                    _a.sent();
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.delete(Room_js_1.Room, { id: room.id })];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.delete(Scenario_js_1.Scenario, { id: scenario.id })];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, data_source_js_1.AppDataSource.manager.delete(User_js_1.User, [gm.id, joueur1.id, joueur2.id, joueur3.id])];
                case 11:
                    _a.sent();
                    console.log('Nettoyage terminé');
                    return [4 /*yield*/, data_source_js_1.AppDataSource.destroy()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error);
