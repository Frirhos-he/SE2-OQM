"use strict";

/* Data Access Object (DAO) module for accessing tickets data */

const db = require("./db");

const service = { id: NaN, serviceName: "none"}

/**
 * @returns all the services offered by the OfficeQueueManagement
 */
exports.getServices = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM services ; ";
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const services = rows.map((e) => {
                    const s = Object.create(service);
                    s.id = e.id;
                    s.serviceName = e.servicename;
                    return s;
                });
                resolve(services);
            }
        });
    });
}
