"use strict";

module.exports = {
  api_connections: {
    host: "localhost",
    port: 1811,
    routes: {
      cors: true
    },
    router: {
      stripTrailingSlash: true
    }
  },
  api_server: {
    connections: {
      routes: {
        security: true
      }
    },
    debug: {
      request: [
        "error"
      ]
    }
  },
  auth: {
    password: "123",
    providers: []
  },
  content: "./content",
  db: {
    adapters: {
      development: require("sails-postgresql")
    },
    connections: {
        adapter: "development",
        host: "localhost",
        port: 5432,
        user: 'postgres',
        password: '',
        database: "tw"
    }
  }
}