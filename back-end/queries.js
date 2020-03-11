const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'airbnb',
    password: 'postgres',
    port: 5432,
});

const getProperties = (request, response) => {
    pool.query('SELECT * FROM property', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const getPersons = (request, response) => {
    pool.query('SELECT * FROM person', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const getEmployees = (request, response) => {
    pool.query('SELECT * FROM employee', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

module.exports = {
    getProperties,
    getPersons,
    getEmployees
}