CREATE TYPE name as (
    first_name varchar(20),
    last_name varchar(20)
);

CREATE TYPE address as (
    street_name varchar(20),
    street_number integer,
    city varchar(20),
    zip_code varchar(9),
    province varchar(20),
    country varchar(20)
);

CREATE TYPE room_type AS ENUM ('private room', 'shared room', 'entire property');

CREATE TYPE property_type AS ENUM ('apartment', 'home', 'cottage', 'bed & breakfast', 'hostel');

CREATE TYPE payment_type AS ENUM ('cash', 'debit card', 'credit card');

CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'approved');

CREATE TYPE rating AS ENUM ('1', '2', '3', '4', '5');

CREATE TABLE property (
    id SERIAL PRIMARY KEY,
    host_id INTEGER NOT NULL,
    property_address address NOT NULL,
    r_type room_type,
    p_type property_type,
    bedrooms Integer NOT NULL,
    bathrooms real NOT NULL,
    accommodations Integer,
    amenities text[],
    FOREIGN KEY (host_id) REFERENCES person (id)
);

CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    full_name name NOT NULL,
    personal_address address,
    date_of_birth date,
    email varchar(20)[] NOT NULL,
    phone_number varchar(13)[]
);

CREATE TABLE payment (
    id SERIAL PRIMARY KEY,
    amount MONEY NOT NULL,
    p_status payment_status NOT NULL,
    p_type payment_type NOT NULL
);

CREATE TABLE employee (
    person_id INTEGER NOT NULL,
    branch_id INTEGER NOT NULL,
    position varchar(50) NOT NULL,
    salary MONEY NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person (id),
    FOREIGN KEY (branch_id) REFERENCES branch (id)
);

CREATE TABLE booking (
    id SERIAL PRIMARY KEY,
    person_id INTEGER NOT NULL,
    property_id INTEGER NOT NULL,
    payment_id INTEGER NOT NULL,
    date_from date NOT NULL,
    date_to date NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person (id),
    FOREIGN KEY (property_id) REFERENCES property (id),
    FOREIGN KEY (payment_id) REFERENCES payment (id)
);

CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    guest_id INTEGER NOT NULL,
    property_id INTEGER NOT NULL,
    property_rating rating NOT NULL,
    comment text,
    FOREIGN KEY (property_id) REFERENCES property (id),
    FOREIGN KEY (guest_id) REFERENCES person (id)
);

CREATE TABLE branch (
    id SERIAL PRIMARY KEY,
    branch_address address NOT NULL
);


INSERT INTO person (full_name, personal_address, date_of_birth, email, phone_number) VALUES
(row('Cory', 'Maklin')::name, row('Blowfish', 32, 'Ottawa', 'K2G7N1', 'Ontario', 'Canada')::address, '02-14-1997', '{"corymaklin@yahoo.ca"}', '{"613-772-3242"}'),
(row('Jane', 'Doe')::name, row('RedHerring', 155, 'Winepeg', 'P23FLQ', 'Ontario', 'Canada')::address, '03-29-2019', '{"janedoe62@gmail.com"}', '{"619-743-3675"}');

INSERT INTO property (
    host_id,
    property_address,
    r_type,
    p_type,
    bedrooms,
    bathrooms,
    accommodations,
    amenities
) VALUES (
    1,
    row('James', 16, 'Ottawa', 'GN8PWQ', 'Ontario', 'Canada')::address,
    'entire property',
    'apartment',
    2,
    1,
    5,
    '{"internet", "pool"}'
);

INSERT INTO branch (branch_address) VALUES (row('Joe', 55, 'Gatineau', 'G88F41', 'Quebec', 'Canada')::address);

INSERT INTO payment (amount, p_status, p_type) VALUES (500, 'completed', 'cash');

INSERT INTO employee (person_id, branch_id, position, salary) VALUES (1, 1, 'junior software developer', 70000);

INSERT INTO review (guest_id, property_id, property_rating, comment) VALUES
(2, 1, '5', 'Had an amazing time.');
