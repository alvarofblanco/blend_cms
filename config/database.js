require('dotenv').config();
const env_node = process.env.NODE_ENV
const config = require('./config')[env_node];

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', process.env.DATABASE_HOST),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', process.env.DATABASE_PORT),
        database: env('DATABASE_NAME', process.env.DATABASE_NAME),
        username: env('DATABASE_USERNAME', process.env.DATABASE_USERNAME),
        password: env('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
