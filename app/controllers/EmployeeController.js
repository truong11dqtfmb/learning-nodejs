const Employee = require('../models/Employee');

// Tạo một nhân viên mới
async function createEmployee(req, res) {
  try {
    const { firstName, lastName, address, age } = req.body;
    const employee = await Employee.create({ firstName, lastName, address, age });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Lấy danh sách tất cả nhân viên
async function getAllEmployees(req, res) {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Cập nhật thông tin một nhân viên
async function updateEmployee(req, res) {
  try {
    const { id } = req.params;
    const { firstName, lastName, address, age } = req.body;
    await Employee.update({ firstName, lastName, address, age }, { where: { id } });
    res.json({ message: 'Employee updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Xóa một nhân viên
async function deleteEmployee(req, res) {
  try {
    const { id } = req.params;
    await Employee.destroy({ where: { id } });
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee
};