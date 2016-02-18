"use strict";

module.exports = {
    attributes: {
        id: {
            primaryKey: true,
            type: 'integer',
            autoIncrement: true
        },
        locale: {
            type: "string",
            defaultsTo: '""',
            notNull: true
        },
        emailVerified: {
            type: "boolean",
            defaultsTo: false
        },
        birthday: "date",


        /*name: {
          required: true,
          type: "string"
        },
        age: {
          required: true,
          type: "integer",
          min: 0,
          max: 9000
        },
        password: {
          required: true,
          type: "string",
          minLength: 5
        },*/

        /*userId: {
            type: "integer",
            min: 0,
            max: 9000
        },*/

        /*
         * An example also has a user.
         */
        user: {
          columnName: 'userId',
          type: 'integer',
          foreignKey: true,
          references: 'user',
          on: 'id'
        },
    },

    /*
    // Before we create anything, make sure
    // to hash the password for security.
    beforeCreate: (values, next) => {
    // Get the crypto library.
    const crypto = require("crypto");

    // Create a hash, we're going to encrypt the password.
    const password = crypto.createHash("sha1");
    password.update(values.password);

    // Apply the hash to the inbound values.
    values.password = password.digest("hex");

    // Move on.
    next();
    }*/
}
