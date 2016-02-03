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
        development: {
            adapter: "development",
            host: "localhost",
            port: 5432,
            user: 'postgres',
            password: '',
            database: "tw",
            // you can override adapter default options
            defaults: {
                //safe - not create tables, alter - auto-migrate columns/fields,
                //drop - drop and rebuild on every run
                migrate: 'drop',
            }
        },

    }
  }
}