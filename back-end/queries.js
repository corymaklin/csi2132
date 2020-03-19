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
        response.status(200).json(results.rows);
    });
};

const getPersons = (request, response) => {
    pool.query('SELECT * FROM person', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    });
};

const getEmployees = (request, response) => {
    pool.query('SELECT * FROM employee', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    });
};

const createPerson = (request, response) => {
    const {
        firstName,
        lastName,
        streetName,
        streetNumber,
        city,
        zipCode,
        province,
        country,
        dateOfBirth,
        email,
        phoneNumber
    } = request.body;

    pool.query(`INSERT INTO
        person
        (first_name, last_name, street_name, street_number, city, zip_code, province, country, date_of_birth, email, phone_number)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *`, [
            firstName,
            lastName,
            streetName,
            streetNumber,
            city,
            zipCode,
            province,
            country,
            dateOfBirth,
            `{${email}}`,
            `{${phoneNumber}}`
        ],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send({id: results.rows[0].id});
    });
}

const createProperty = (request, response) => {
    // const { property } = request.body;
    const {
        hostId,
        streetName,
        streetNumber,
        city,
        province,
        country,
        zipCode,
        price,
        roomType,
        propertyType,
        bedrooms,
        bathrooms,
        accomodations,
        amenities
    } = request.body;

    pool.query('INSERT INTO property (name, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)', [
            hostId,
            streetName,
            streetNumber,
            city,
            province,
            country,
            zipCode,
            price,
            roomType,
            propertyType,
            bedrooms,
            bathrooms,
            accomodations,
            amenities
            // property.hostId,
            // property.streetName,
            // property.streetNumber,
            // property.city,
            // property.province,
            // property.country,
            // property.zipCode,
            // property.price,
            // property.roomType,
            // property.propertyType,
            // property.bedrooms,
            // property.bathrooms,
            // property.accomodations,
            // property.amenities
        ],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Property ${result.insertId} added`);
    });
}

module.exports = {
    createPerson,
    createProperty,
    getProperties,
    getPersons,
    getEmployees
}