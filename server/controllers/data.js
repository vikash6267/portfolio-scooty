
const userModel = require('../model/user');
const ExcelJS = require('exceljs');

// Define the exportToExcel function as an endpoint
// for query details 
exports.exportToExcel = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await userModel.find();

    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Users');

    // Define worksheet headers
    worksheet.columns = [
      { header: 'Username', key: 'firstname', width: 20 },
      { header: 'Email', key: 'email', width: 20 },
      { header: 'Message', key: 'message', width: 15 },
      { header: 'Contact', key: 'contact', width: 15 }
      // Add more columns as needed
    ];

    // console.log(users)
    // Populate worksheet with user data
    users.forEach(user => {
      worksheet.addRow({
        name : user.firstname,
        email: user.email,
        message: user.message,
        contact: user.contact,
    
      });
    });

    // Set response headers
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="users.xlsx"');

    // Serialize workbook to response
    await workbook.xlsx.write(res);

    // End response
    res.end();
  } catch (error) {
    console.error('Error downloading users:', error);
    res.status(500).send('Error downloading users');
  }
};



