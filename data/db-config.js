const knex = require('knex'); // to make sql queries using javascript

const config = require('../knexfile.js'); // different configs for different envs

//in HEROKU, NODE_ENV // "production"

const env=process.env.NODE_ENV || 'development'

console.log('the env', env)

module.exports = knex(config[env]); // choose env and call knex with the right config