/*
Challenge

- Start by defining an interface Computer using the interface keyword.
  This will serve as a blueprint for objects that will be of this type.
- Inside the interface, define the properties that the object should have.
  In this case, we have id, brand, ram, and storage.
- Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
- Use the ? after the storage property to indicate that
  this property is optional and may not exist on all objects of this type.
- Also inside the interface, define any methods that the object should have.
  In this case, we have upgradeRam, which is a function that takes a number and returns a number.
- Now that we have our interface, we can create an object that adheres to this interface.
  This object should have all the properties defined in the interface
  (except for optional ones, which are... optional), and the methods should be implemented.
- Finally, we can use our object. We can call its upgradeRam method to increase its RAM.


*/

interface Computer {
  readonly id: number; //cant change
  brand: string;
  ram: number;
  storage?: number; //optional element variable
  upgradeRam: (value: number) => number;
}

const laptop1: Computer = {
  id: 123,
  brand: "Acer katana",
  ram: 16,
  storage: 256,
  //   upgradeRam(value) {
  //     return (this.ram += value);
  //   },
  //cara 2:
  upgradeRam: (value) => {
    return (laptop1.ram += value);
  },
};
laptop1.storage = 1280;
laptop1.upgradeRam(16);
console.log(laptop1);
console.log("ram update =", laptop1.ram);
console.log("storage update =", laptop1.storage);
