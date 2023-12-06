import { fetchEmployeeData } from './modules/init.js';

// GET DOM ELEMENTS
let empTable    = document.getElementById('employees')
let empCount    = document.querySelector('#empCount')

async function buildGrid() {
    try {
      const employees = await fetchEmployeeData();
      console.log('Employee Data:', employees);
        // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
         empTable.lastElementChild.remove()
        // REBUILD THE TBODY FROM SCRATCH
         let tbody = document.createElement('tbody')
         for (let i in employees) {
            let employee = employees[i];
            console.log(employee)
            tbody.innerHTML += `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.ext}</td>
                        <td><a href="mailto:${employee.email}">${employee.email}</a></td>
                        <td>${employee.title}</td>
                        <td><button class="btn btn-sm btn-danger delete">X</button></td>
                    </tr>
                `;
            }
            empTable.appendChild(tbody);
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

