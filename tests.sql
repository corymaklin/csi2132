-- 1. Give the details of all the guests who rented properties.
-- Please display the columns as guest name, rental type, rental price, signing date, branch, payment type and payment status.
-- Sort by the payment type in ascending order and signing date in descending order.
select 

guest_name, rental_type, rental_price, signing_date, branch, payment_type, payment_status

order by payment_type asc

signing_date desc

-- 2. Create a view named GuestListView that gives the details of all the guests.
-- Please, sort the guests by the branch id and then by guest id.
create view GuestListView as 
select * from person order by guest_id;

-- 3. Display the details of the cheapest (completed) rental.
select * from booking inner join payments on booking.payment_id = payments.id order by amount desc limit 1;

-- 4. List all the properties rented and sort based on the branch id and review rating.
select * from properties
inner join booking on properties.id = booking.property_id
inner join review on review.booking_id = booking.id
order by review.rating;

-- 5. Find the properties that are already listed but not yet rented. Please, avoid duplications.
select * from properties
inner join booking on properties.id = booking.property_id;

-- 6. List all the details of all properties rented on the 10th day of any month.
-- Ensure to insert dates in your table that correspond in order to run your query.
select * from properties 
inner join booking on properties.id = booking.property_id
where 

-- 7. List all the managers and the employees with salary greater than or equal to $15000 by their ids,
-- names, branch ids, branch names and salary. Sort by manager id and then by employee id.
select id, name, branch_id, branch_name, salary from employee
inner join person on employee.person_id = person.id
inner join branch on branch.id = employee.branch_id
where employee.salary > 15000
order by branch.manager_id, employee.person_id;

-- 8. Consider creating a simple bill for a guest stating the property type, host, address, amount paid and payment type.
select property_type

-- 9. Update the phone number of a guest.
update person
set phone_number = array_replace(person, '6131238966', '6135552323');
where id = 1;

-- 10. Create and test a user-defined function named FirstNameFirst that combines two attributes of the
-- guest named firstName and lastName into a concatenated value named
-- fullName [e.g., James and Brown will be combined to read James Brown].
create function FirstNameFirst (text first_name, text last_name)
    concat(first_name,' ',last_name) "fullName" 
