let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
//a. Function toat calculates the total of all saralries
function sumSalaries(salaries) {
  let total = 0;
  for (let salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}

//b. Function that returns the name of highest earner
function topEarner(salaries) {
  let highestSalary = 0;
  let topEarner = "";
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > highestSalary) {
      highestSalary = salary;
      topEarner = name;
    }
  }
  return topEarner;
}

console.log(sumSalaries(salaries)); // Output: 233000
console.log(topEarner(salaries)); // Output: Christina
