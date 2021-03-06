-- 1. Give the details of all the guests who rented property.
-- Please display the columns as guest name, rental type, rental price, signing date, branch, payment type and payment status.
-- Sort by the payment type in ascending order and signing date in descending order.
select
concat(person.first_name, ' ', person.last_name) as guest_name,
property.p_type as rental_type,
property.price as rental_price,
booking.date_from as signing_date,
-- branch.branch_name as branch,
payment.p_type as payment_type,
payment.p_status as payment_status
from property
inner join booking on property.id = booking.property_id
inner join person on person.id = booking.guest_id
inner join payment on payment.booking_id = booking.id
order by payment.p_type asc, signing_date desc;

-- 2. Create a view named GuestListView that gives the details of all the guests.
-- Please, sort the guests by the branch id and then by guest id.
create view GuestListView as 
select * from person order by id;

-- 3. Display the details of the cheapest (completed) rental.
select * from booking
inner join payment on booking.id = payment.booking_id
order by amount desc limit 1;

-- 4. List all the property rented and sort based on the branch id and review rating.
select property.id from property
inner join booking on property.id = booking.property_id
inner join review on review.booking_id = booking.id
order by review.rating;

-- 5. Find the property that are already listed but not yet rented. Please, avoid duplications.
select * from property
where id not in (
    select property_id from booking
);

-- 6. List all the details of all property rented on the 10th day of any month.
-- Ensure to insert dates in your table that correspond in order to run your query.
select * from property 
inner join booking on property.id = booking.property_id
where 

-- 7. List all the managers and the employees with salary greater than or equal to $15000 by their ids,
-- names, branch ids, branch names and salary. Sort by manager id and then by employee id.
select person.id, concat(person.first_name, ' ', person.last_name) as full_name, employee.branch_id, branch.branch_name, employee.salary
from employee
inner join person on employee.person_id = person.id
inner join branch on branch.id = employee.branch_id
where employee.salary > 15000::money
order by branch.manager_id, employee.person_id;

-- 8. Consider creating a simple bill for a guest stating the property type, host, address, amount paid and payment type.
select property.p_type as property_type, property.property_address, payment.amount, payment.p_type,
(select id as host from person where id = property.host_id)
from person
inner join booking on booking.guest_id = person.id
inner join payment on payment.booking_id = booking.id
inner join property on property.id = booking.property_id
;

-- 9. Update the phone number of a guest.
update person set phone_number = '{613-555-9321}' where first_name = 'Cory';

-- 10. Create and test a user-defined function named FirstNameFirst that combines two attributes of the
-- guest named firstName and lastName into a concatenated value named
-- fullName [e.g., James and Brown will be combined to read James Brown].
create function FirstNameFirst (first_name text, last_name text) returns text as $fullName$
begin
    return concat(first_name, ' ', last_name);
end; $fullName$
language PLPGSQL;

SELECT FirstNameFirst('Cory', 'Maklin');