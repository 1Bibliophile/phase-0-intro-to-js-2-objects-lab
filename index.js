// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: " "
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = { ...obj };

    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = { ...employee};
    //const newObj = Object.assign({}, employee, {[key]: value}) //Duplicate & add key-value pair
    delete newObj[key];

    return newObj;
}
/*function workplace()
{
    const employee =
    {
        name: 'Sam',
        streetAddress
    };
}   

const tempEmployee = { ...employee};

function updateEmployee(employee, key, value)
      {
          const employee1 = { ...employee};
          
          employee1 =
          {
              name: 'Sam',
              streetAddress: '11 Broadway'
          };

          return employee1;
      }

// Error 1
function updateEmployeeWithKeyAndValue(tempEmployee, name, streetAddress)
{
    const employee1 = {...tempEmployee};
    employee1.streetAddress = '11 Broadway';

    return employee1;
}

//Error 2
function destructivelyUpdateEmployeeWithKeyAndValue(tempEmployee, name, streetAddress)
{
    const employee = tempEmployee;
    employee.streetAddress = '11 Broadway';
    return employee;

}

//Error 3
function deleteFromEmployeeByKey(tempEmployee, streetAddress)
{
    const employee = {...tempEmployee};
    
    delete employee.streetAddress;

    return employee;
}

//Error 4
function destructivelyDeleteFromEmployeeByKey(tempEmployee, streetAddress)
{
    const employee = tempEmployee;
    delete employee.streetAddress;

    return employee;


}
*/