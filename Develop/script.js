// reference for add employee btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// collects employee data
const collectEmployees = function() {

// array to hold employee data
    const employees = [];

    let keepGoing = true;

// loop to get multiple employyees data
    while (keepGoing) {
        const firstName = prompt ("Enter first name:");
        const lastName = prompt ("Enter last name:");
        let salary = prompt ("Enter salary:");

        if (isNaN(salary)) {
            salary = 0;
        }

        const employee = {
            firstName: firstName,
            lastName: lastName,
            salary: parseFloat(salary)
        };

        employees.push(employee);

        keepGoing = confirm("Do you want to add another employee?");
    }

    return employees;

}

const displayEmployees = function(employeesArray) {
    
    const employeeTable = document.querySelector('#employee-table');
  
   
    employeeTable.innerHTML = '';
  
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];
  
      const newTableRow = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);
  
      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);
  
      const salaryCell = document.createElement("td");

      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
      });
  
      newTableRow.append(salaryCell);
  
      employeeTable.append(newTableRow);
    }
  }
  
  const trackEmployeeData = function() {
    const employees = collectEmployees();
  
    console.table(employees);
  

  
    console.log('==============================');
  

  
    employees.sort(function(a,b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });
  
    displayEmployees(employees);
  }
  
  addEmployeesBtn.addEventListener('click', trackEmployeeData);
  