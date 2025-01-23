/*
# Challenge

- Define an enum named UserRole with members Admin, Manager, and Employee.
- Define a type alias named User with properties id (number),
  name (string), role (UserRole), and contact
  (a tuple with two elements: email as string and phone as string).
- Define a function named createUser that takes a User object
  as its parameter and returns a User object.

- Call the createUser function with an object that matches the User type,
  store the result in a variable, and log the variable to the console.



*/

/*jawab
 */

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}
//invoke
const myuser = createUser({
  id: 123,
  name: "Indra Suryawan",
  role: UserRole.Manager,
  contact: ["indrasuryawan@gmail.com", "085212886886"],
});
console.log(myuser);
