create extension pgcrypto;

CREATE TYPE room_type AS ENUM ('private room', 'shared room', 'entire property');

CREATE TYPE property_type AS ENUM ('apartment', 'home', 'cottage', 'bed & breakfast', 'hostel');

CREATE TYPE payment_type AS ENUM ('cash', 'check', 'direct debit', 'credit card');

CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'approved');

CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    street_name varchar(50) NOT NULL,
    street_number integer NOT NULL,
    city varchar(50) NOT NULL,
    zip_code varchar(50) NOT NULL,
    province varchar(50) NOT NULL,
    country varchar(50) NOT NULL,
    date_of_birth date,
    email varchar(50)[] NOT NULL,
    phone_number varchar(13)[]
);

CREATE TABLE branch (
    id SERIAL PRIMARY KEY,
    branch_name varchar(20) NOT NULL,
    street_name varchar(50) NOT NULL,
    street_number integer NOT NULL,
    city varchar(50) NOT NULL,
    zip_code varchar(50) NOT NULL,
    province varchar(50) NOT NULL,
    country varchar(50) NOT NULL,
    manager_id INTEGER NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES person (id)
);

CREATE TABLE employee (
    person_id INTEGER NOT NULL,
    branch_id INTEGER NOT NULL,
    position varchar(50) NOT NULL,
    salary MONEY NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person (id),
    FOREIGN KEY (branch_id) REFERENCES branch (id)
);

CREATE TABLE property (
    id SERIAL PRIMARY KEY,
    host_id INTEGER NOT NULL,
    street_name varchar(50) NOT NULL,
    street_number integer NOT NULL,
    city varchar(50) NOT NULL,
    zip_code varchar(50) NOT NULL,
    province varchar(50) NOT NULL,
    country varchar(50) NOT NULL,
    price MONEY NOT NULL,
    r_type room_type,
    p_type property_type,
    bedrooms Integer NOT NULL,
    bathrooms real NOT NULL,
    accommodations Integer, 
    amenities text[],
    FOREIGN KEY (host_id) REFERENCES person (id)
);

CREATE TABLE payment (
    booking_id INTEGER NOT NULL,
    amount MONEY NOT NULL,
    p_status payment_status NOT NULL,
    p_type payment_type NOT NULL
);

CREATE TABLE booking (
    id SERIAL PRIMARY KEY,
    guest_id INTEGER NOT NULL,
    property_id INTEGER NOT NULL,
    date_from date NOT NULL,
    date_to date NOT NULL,
    FOREIGN KEY (guest_id) REFERENCES person (id),
    FOREIGN KEY (property_id) REFERENCES property (id)
);

create table credentials (
    username text NOT NULL UNIQUE,
    password text NOT NULL,
    person_id INTEGER NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person (id)
);

CREATE TABLE review (
    booking_id INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment text,
    FOREIGN KEY (booking_id) REFERENCES booking (id)
);


INSERT INTO person (first_name, last_name, street_name, street_number, city, zip_code, province, country, date_of_birth, email, phone_number) VALUES
('Cory', 'Maklin', 'Blowfish', 32, 'Ottawa', 'K2G7N1', 'Ontario', 'Canada', '02-14-1997', '{"corymaklin@yahoo.ca"}', '{"613-772-3242"}'),
('Jane', 'Doe', 'RedHerring', 155, 'Winepeg', 'P23FLQ', 'Ontario', 'Canada', '03-29-2019', '{"janedoe62@gmail.com"}', '{"619-743-3675"}'),
('John', 'Connor', 'Terminator', 222, 'New York', 'FFF666', 'New York', 'United States', '11-22-1900', '{"john.connor@gmail.com"}', '{"923-888-8888"}');

INSERT INTO property (
    host_id,
    street_name,
    street_number,
    city,
    zip_code,
    province,
    country,
    price,
    r_type,
    p_type,
    bedrooms,
    bathrooms,
    accommodations,
    amenities
) VALUES (
    1,
    'James',
    16,
    'Ottawa',
    'GN8PWQ',
    'Ontario',
    'Canada',
    90,
    'entire property',
    'apartment',
    2,
    1,
    5,
    '{"internet", "pool"}'
), (
    1,
    'Verrault',
    42,
    'Ottawa',
    'KKKKKK',
    'Ontario',
    'Canada',
    50,
    'private room',
    'home',
    2,
    0.5,
    2,
    '{"internet"}'
);

INSERT INTO branch (branch_name, street_name, street_number, city, zip_code, province, country, manager_id)
VALUES ('Ottawa', 'Joe', 55, 'Gatineau', 'G88F41', 'Quebec', 'Canada', 1);

INSERT INTO employee (person_id, branch_id, position, salary)
VALUES (2, 1, 'junior software developer', 70000);

INSERT INTO payment (booking_id, amount, p_status, p_type)
VALUES (1, 500, 'completed', 'cash');

insert into booking (guest_id, property_id, date_from, date_to)
values (3, 1, '02-03-2020', '02-07-2020');

INSERT INTO review (booking_id, rating, comment)
VALUES (2, 5, 'Had an amazing time.');

