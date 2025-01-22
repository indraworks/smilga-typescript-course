/*
- Define the Person interface Start by defining a Person interface
  with a name property of type string.

- Define the DogOwner interface Next, define a DogOwner interface
  that extends Person and adds a dogName property of type string.

- Define the Manager interface Then, define a Manager interface
  that extends Person and adds two methods: managePeople and delegateTasks.
  Both methods should have a return type of void.

- Define the getEmployee function Now, define a function called
  getEmployee that returns a Person, DogOwner, or Manager. Inside this function,
  generate a random number and use it to decide which type of object to return.
  If the number is less than 0.33,
  return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
  
- Finally, create a variable called employee that can be a Person, DogOwner,
  or Manager, and assign it the return value of getEmployee. Then, log employee to the console.




*/

interface Person {
  name: string;
}

interface dogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  // managePeople :()=>void; atau
  managePeople(): void;
  delegateTasks(): void;
}
function getEmployee(): Person | dogOwner | Manager {
  let random = Math.random();
  if (random < 0.33) {
    return { name: "jhon" };
  } else if (random < 0.66) {
    return { name: "Maria", dogName: "Timbul" };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("Iam manage people!");
      },
      delegateTasks() {
        console.log("iam delegate tasks");
      },
    };
  }
}
console.log(getEmployee());
