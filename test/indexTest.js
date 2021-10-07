describe('employees', function() {
  describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
    beforeEach(function () {
      for (const key in employee) {
        delete employee[key];
      }
      
      const employee = 
      {
          name: 'Sam'
      };

      employee = updateEmployeeWithKeyAndValue(employee, key, value);

    });

    it('returns an employee with the original key value pairs and the new key value pair', function () {
      expect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')).to.eql({
        name: 'Sam',
        streetAddress: '11 Broadway'
      });

      
      
      


    });

    it('it does not modify the original employee, but rather returns a clone with the new data', function () {
      updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

      expect(employee['streetAddress']).to.equal(undefined);
    });
  });

  describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
    it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
      expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
        name: 'Sam',
        streetAddress: '12 Broadway'
      });

      expect(employee).to.eql({
        name: 'Sam',
        streetAddress: '12 Broadway'
      });
    });
  });

  describe('deleteFromEmployeeByKey(employee, key)', function () {
    it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', function () {
      let newEmployee = deleteFromEmployeeByKey(employee, 'name');

      expect(newEmployee['name']).to.equal(undefined);
      expect(typeof newEmployee).to.equal('object');
    });

    it('does not modify the original employee (it is non-destructive)', function () {
      deleteFromEmployeeByKey(employee, 'name');

      expect(employee['name']).to.equal('Sam');
    });
  });

  describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
    it('returns employee without the delete key/value pair', function () {
      let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      expect(newEmployee['name']).to.equal(undefined);
    });

    it('modifies the original employee', function () {
      let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      expect(employee['name']).to.equal(undefined);
      expect(employee).to.equal(newEmployee);
    });
  });
});

/*
function workplace()
{
    const employee =
    {
        name: 'Sam',
        streetAddress
    };
    beforeEach(function ()
    {
      for (const key in employee) 
      {
          delete employee[key];
      }
    
    
    
    const tempEmployee = { ...employee};
    
    
    //Error 1
    tempEmployee = updateEmployeeWithKeyAndValue(tempEmployee, 'name', 'streetAddress');
    
    //Error 2
    tempEmployee = destructivelyUpdateEmployeeWithKeyAndValue(tempEmployee, 'name');

    //Error 3
    tempEmployee = { ...employee};
    tempEmployee = deleteFromEmployeeByKey(tempEmployee, 'streetAddress');

    //Error 4
    tempEmployee = { ...employee};
    tempEmployee = updateEmployeeWithKeyAndValue(tempEmployee, 'name', 'streetAddress');
    tempEmployee = destructivelyUpdateEmployeeWithKeyAndValue(tempEmployee, 'streetAddress');
    
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

