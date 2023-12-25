const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.role = require('./role.model');

db.ROLES = ["company_manager", "point_manager", "region_manager", "point_staff", "region_staff"];

module.exports = db;