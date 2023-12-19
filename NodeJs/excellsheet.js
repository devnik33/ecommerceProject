const ExcelJS = require('exceljs');

// Create a new workbook
const workbook = new ExcelJS.Workbook();

// Add a worksheet to the workbook
const worksheet = workbook.addWorksheet();

// Set the name of the worksheet
worksheet.title = 'MySheetName';

// Add data to the worksheet
let orderHeading=worksheet.addRow(['','','Order Information','','']);

// for design the heading of header 
orderHeading.eachCell((cell, colNumber) => {
cell.font = { bold: true,size:12, color: { argb: 'FFFFFF' } };
cell.fill = {
type: 'pattern',
pattern: 'solid',
fgColor: { argb: '2F75B5' } // Use your desired color code
};
cell.alignment = { horizontal: 'center' };
});

// end of design for the heading of header 
worksheet.addRow(['Order Number','Order Type']);
worksheet.addRow(['Building Use','Building Exposure Conditions']);



worksheet.addRow(['Name','Email']);
worksheet.addRow(['Phone','Company']);


worksheet.columns.forEach((column, colNumber) => {
let maxLength = 0;
column.eachCell({ includeEmpty: true }, (cell) => {
const columnLength = cell.value ? cell.value.toString().length : 10;
if (columnLength > maxLength) {
    maxLength = columnLength;
}
});
column.width = maxLength < 30 ? 30 : maxLength; // Set a minimum width of 10
});

// Save the workbook to a file or stream
workbook.xlsx.writeFile('exampleone.xlsx')
  .then(() => {
    console.log('Excel file created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Excel file:', error);
  });