const db = require('../config/db.config');

const Customer = db.Customer;

exports.findAll = (req, res) => {
  // find all Customer information from
  Customer.findAll()
    .then(customers => {
      console.log(`List:   ${customers}`);
      res.status(200).json({
        message: 'Get all Customer Infos Successfully!',
        customers: customers,
      });
    })
    .catch(error => {
      // log on console
      console.log(error);

      res.status(500).json({
        message: 'Error!',
        error: error,
      });
    });
};

exports.create = (req, res) => {
  try {
    console.log('-----------------------------------------------------------');
    const customer = {};
    // Building Customer object from upoading request's body
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.address = req.body.address;
    customer.age = req.body.age;

    console.log(` ${customer} `);

    // Save to MySQL database
    Customer.create(customer).then(result => {
      // send uploading message to client
      res.status(200).json({
        message: `Upload Successfully a Customer with id =  ${result.id}`,
        customer: result,
      });
    });
  } catch (error) {
    console.log(` ${firstName} `);
    res.status(500).json({
      message: 'Fail!',
      error: error.message,
    });
  }
};

exports.getCustomerById = (req, res) => {
  // find all Customer information from
  const customerId = req.params.id;
  Customer.findByPk(customerId)
    .then(customer => {
      res.status(200).json({
        message: `Successfully Get a Customer with id =  ${customerId}`,
        customers: customer,
      });
    })
    .catch(error => {
      // log on console
      console.log(error);

      res.status(500).json({
        message: 'Error!',
        error: error,
      });
    });
};

exports.updateById = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findByPk(customerId);

    if (!customer) {
      // return a response to client
      res.status(404).json({
        message: `Not Found for updating a customer with id =  + ${customerId}`,
        customer: '',
        error: '404',
      });
    } else {
      // update new change to database
      const updatedObject = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        age: req.body.age,
      };
      const result = await Customer.update(updatedObject, {
        returning: true,
        where: { id: customerId },
      });

      // return the response to client
      if (!result) {
        res.status(500).json({
          message:
            `Error -> Can not update a customer with id =  ${req.params.id}`,
          error: 'Can NOT Updated',
        });
      }

      res.status(200).json({
        message: `Update successfully a Customer with id =  ${customerId}`,
        customer: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error -> Can not update a customer with id = ${req.params.id}`,
      error: error.message,
    });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findByPk(customerId);

    if (!customer) {
      res.status(404).json({
        message: `Does Not exist a Customer with id = ${customerId}`,
        error: '404',
      });
    } else {
      await customer.destroy({ where: { id } });
      res.status(200).json({
        message: `Delete Successfully a Customer with id =  ${customerId}`,
        customer: customer,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error -> Can NOT delete a customer with id = ${req.params.id}`,
      error: error.message,
    });
  }
};
