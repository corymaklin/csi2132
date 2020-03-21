const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'airbnb',
    password: 'postgres',
    port: 5432,
});

const getBookings = (request, response) => {
    // pool.query('SELECT * FROM property', (error, results) => {
        pool.query(`SELECT property_id, date_from, date_to FROM booking where id=${request.params.id}`, (error, results) => {
        if (error) {
            // throw error
            response.status(500).send();
        } else {
            response.status(200).json(results.rows);
        }
    });
};

const getProperties = (request, response) => {
    // pool.query('SELECT * FROM property', (error, results) => {
        pool.query('SELECT id, province, country, price FROM property', (error, results) => {
        if (error) {
            // throw error
            response.status(500).send();
        } else {
            response.status(200).json(results.rows);
        }
    });
};

const getProperty = (request, response) => {
    pool.query(`SELECT * FROM property where id=${request.params.id}`, (error, results) => {
        if (error) {
            // throw error
            response.status(500).send();
        } else {
            response.status(200).json(results.rows);
        }
    });
};

const getPersons = (request, response) => {
    pool.query('SELECT * FROM person', (error, results) => {
        if (error) {
            // throw error
            response.status(500).send();
        } else {
            response.status(200).json(results.rows);
        }
    });
};

const getEmployees = (request, response) => {
    pool.query('SELECT * FROM employee', (error, results) => {
        if (error) {
            // throw error
            response.status(500).send();
        } else {
            response.status(200).json(results.rows);
        }
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
                // throw error;
                response.status(500).send();
            } else {
                response.status(201).send({id: results.rows[0].id});
            }
    });
}

const createProperty = (request, response) => {
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
        accommodations,
        amenities
    } = request.body;

    pool.query(`INSERT INTO
        property (host_id, street_name, street_number, city, zip_code, province, country, price, r_type, p_type, bedrooms, bathrooms, accommodations, amenities)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING *`, [
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
            accommodations,
            `{${amenities}}`
        ],
        (error, results) => {
            if (error) {
                // throw error
                response.status(500).send();
            } else {
                if (results) {
                    response.status(201).send({id: results.rows[0].id});
                } else {
                    response.status(500).send();
                }
            }
    });
}

const signup = (request, response) => {
    const {
        personId,
        username,
        password
    } = request.body;

    pool.query(`INSERT INTO
        credentials (person_id, username, password)
        VALUES ($1, $2, crypt($3, gen_salt('bf')))
        RETURNING *`, [
            personId,
            username,
            password
        ],
        (error, results) => {
            if (error) {
                // throw error;
                response.status(500).send();
            }
            if (results.rows[0]) {
                response.status(201).send({id: results.rows[0].person_id});
            } else {
                response.status(500).send();
            }     
    });
}

const login = (request, response) => {
    const {
       username,
       password
    } = request.body;

    pool.query(`select person_id from credentials where username=$1 and password=crypt($2, password)`, [
            username,
            password
        ],
        (error, results) => {
            if (error) {
                throw error;
            } else {
                if (results.rows[0]) {
                    response.status(201).send({id: results.rows[0].person_id});
                } else {
                    response.status(500).send();
                }
            }    
    });
}

module.exports = {
    getBookings,
    createPerson,
    createProperty,
    getProperties,
    getProperty,
    getPersons,
    getEmployees,
    login,
    signup
}