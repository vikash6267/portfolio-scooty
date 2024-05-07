
const userModel = require('../model/user');

// Define the exportToExcel function as an endpoint
exports.exportToExcel = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await userModel.find();

    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Users');

    // Define worksheet headers
    worksheet.columns = [
      { header: 'Username', key: 'username', width: 20 },
      { header: 'Name', key: 'name', width: 20 },
      { header: 'City', key: 'city', width: 20 },
      { header: 'Total Count', key: 'totalCount', width: 15 },
      { header: 'Contact', key: 'contact', width: 15 }
      // Add more columns as needed
    ];

    // Populate worksheet with user data
    users.forEach(user => {
      worksheet.addRow({
        username: user.username,
        name: user.name,
        city: user.city,
        totalCount: user.totalCount,
        contact: user.contact
        // Add more fields as needed
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
