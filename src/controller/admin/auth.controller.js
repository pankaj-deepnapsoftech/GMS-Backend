import { Admin } from '../../models/Admin/admin.model.js';


const adminRegister = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  const existingUser = await Admin.findOne({
    email,
  });

  if (existingUser) {
    return res.status(404).json({ message: 'Employee is already registered' });
  }

  const createAdmin = await Admin.create({
    name,
    email,
    password,
  });

  if (!createAdmin) {
    return res.status(500).json({ message: 'Failed to create admin' });
  }

  res.status(200).json({ createAdmin, message: 'admin create successfully' });
};

export { adminRegister };
