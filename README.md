drop type <type>;

### create database
create database <name>;

### delete database
DROP DATABASE <name>;

### list databases
\l

### connect to database
\c <name>

### list tables
\d

### describe table
\d+ <name>

### list user defined types
\dT

### update array
UPDATE sal_emp SET pay_by_quarter = '{25000,25000,27000,27000}'
    WHERE name = 'Carol';

UPDATE sal_emp SET pay_by_quarter[4] = 15000
    WHERE name = 'Bill';

### start backend
node app.js

### add column to table
ALTER TABLE property ADD COLUMN property_image bytea;

### insert image into postgresql

UPDATE property SET property_image=bytea('/Users/cmaklin/Documents/csi2132/project/images/a1.png') WHERE id=1;
UPDATE property SET property_image=bytea('/Users/cmaklin/Documents/csi2132/project/images/h1.jpg') WHERE id=2;



### drop column
alter table property drop column property_image;