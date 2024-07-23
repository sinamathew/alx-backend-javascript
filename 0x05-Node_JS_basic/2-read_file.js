const fs = require('fs');

const csvToJson = (filePath) => {
  let data = fs.readFileSync(filePath, 'utf8', (err) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
  }).trim().toString().split('\n');
  
  let header = data[0].split(',');
  let dataObject = [];
  for (let index = 1; index < data.length; index++) {
    const body = data[index].split(',');
    const object = {};
    for (let j = 0; j < header.length; j++) {
      object[header[j].trim()] = body[j].trim();
    }
    dataObject.push(object);
  }
  return dataObject;
};

const countStudents = (filePath) => {
  let data = csvToJson(filePath);
  console.log(`Number of students: ${data.length}`);
  let fields = [];

  for (let i = 0; i < data.length; i++) {
    if (!fields.includes(data[i]['field'])) {
      fields.push(data[i]['field']);
    }
  }
  
  for (let allFields = 0; allFields < fields.length; allFields++) {
    let students = 0;
    let firstnames = [];
    for (let j = 0; j < data.length; j++) {
      if (data[j]['field'] === fields[allFields]) {
        students++;
        firstnames.push(data[j]['firstname']);
        
      }
    }
    console.log(`Number of students in ${fields[allFields]}: ${students}. \
List: ${firstnames.join(", ")}`);
  }
};

module.exports = countStudents;
