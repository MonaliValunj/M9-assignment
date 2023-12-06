async function fetchEmployeeData() {
    try {
        const response = await fetch('./data/employees.json');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error loading employee data:', error);
        throw error;
      }
  }

  export { fetchEmployeeData };

  