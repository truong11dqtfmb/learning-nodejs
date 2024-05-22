let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/CustomerController');
const employeeController = require('../controllers/EmployeeController');
// CRUD Customers:
router.get('/customers/all', customers.findAll);
router.post('/customers/create', customers.create);
router.put('/customers/update/:id', customers.updateById);
router.delete('/customers/delete/:id', customers.deleteById);
router.get('/customers/:id', customers.getCustomerById);


// CRUD Employee:
router.post('/employees', employeeController.createEmployee);
router.get('/employees', employeeController.getAllEmployees);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);


module.exports = router;