"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
var typeorm_1 = require("typeorm");
var User_js_1 = require("./models/User.js");
var Scene_js_1 = require("./models/Scene.js");
var Scenario_js_1 = require("./models/Scenario.js");
var databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL n\'est pas défini dans les variables d\'environnement.');
}
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: databaseUrl,
    synchronize: true,
    logging: false,
    entities: [User_js_1.User, Scene_js_1.Scene, Scenario_js_1.Scenario],
    ssl: { rejectUnauthorized: false }
});
