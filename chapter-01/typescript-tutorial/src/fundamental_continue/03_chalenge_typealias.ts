/*
 Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

- Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

- Create a Union Type: Define a type Staff that is a union of Employee and Manager.

- Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, 
use a type guard to check if the 'employees' property exists in the passed object. 
If it does, print a message indicating that the person is a manager and the number of employees they manage.
 If it doesn't, print a message indicating that the person is an employee and the department they belong to.

- Create Employee and Manager objects: Create two Employee objects. 
One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

- Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.


*/

type Employee = {
  id: number;
  name: string;
  departement: string;
};
type Manager = {
  id: number;
  name: string;
  Employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ("Employees" in staff) {
    console.log(
      `this ${staff.name} is manager for ${staff.Employees.length} employees}`
    );
  } else {
    console.log(
      `this ${staff.name} is employees for the Departement : ${staff.departement}`
    );
  }
}

const lucky: Employee = {
  id: 1,
  name: "lucky",
  departement: "HR",
};

const zacky: Employee = {
  id: 2,
  name: "zacky",
  departement: "HR",
};

const alya: Employee = {
  id: 4,
  name: "Alya",
  departement: "product",
};
const raska: Employee = {
  id: 7,
  name: "raska",
  departement: "quality",
};

const indra: Manager = {
  id: 1,
  name: "Indra",
  Employees: [raska, zacky, alya, lucky], //ini nama2 const sudah mewakili object masing2 yaitu {id,name,departement}
};
printStaffDetails(alya);
printStaffDetails(lucky);
printStaffDetails(indra);
