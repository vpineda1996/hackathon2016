/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri)
};

// Insert models below
db.Ingredient = db.sequelize.import('../api/ingredient/ingredient.model');
db.Recipes = db.sequelize.import('../api/recipes/recipes.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');

module.exports = db;
