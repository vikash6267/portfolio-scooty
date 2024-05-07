// Import necessary modules
const fs = require('fs');
const json2xls = require('json2xls');
const userModel = require('../model/user');

// Define the exportToExcel function as an endpoint
exports.exportToExcel = async (req, res) => {
  try {
    // Fetch data from MongoDB using Mongoose
    const data = await userModel.find({});

    // Convert JSON data to Excel format
    const xls = json2xls(data);

    // Write Excel data to a file
    const fileName = 'users.xlsx';
    fs.writeFileSync(fileName, xls, 'binary');

    console.log('Excel file generated successfully.');

    // Send the Excel file as a response
    res.download(fileName, fileName, (err) => {
      if (err) {
        console.error('Error sending Excel file:', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Excel file sent successfully.');
        // Delete the file after sending it
        fs.unlinkSync(fileName);
      }
    });
  } catch (err) {
    console.error('Error generating Excel file:', err);
    res.status(500).send('Error generating Excel file.');
  }
};
